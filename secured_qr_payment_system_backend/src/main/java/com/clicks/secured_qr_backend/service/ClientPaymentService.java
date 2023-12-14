package com.clicks.secured_qr_backend.service;

import com.clicks.secured_qr_backend.dtos.ClientPaymentDto;
import com.clicks.secured_qr_backend.dtos.QrCodeResponse;
import com.clicks.secured_qr_backend.dtos.requests.ConfirmPaymentRequest;
import com.clicks.secured_qr_backend.dtos.requests.NewPaymentRequest;
import com.clicks.secured_qr_backend.dtos.requests.QrCodeDto;
import com.clicks.secured_qr_backend.exceptions.InvalidParamsException;
import com.clicks.secured_qr_backend.exceptions.ResourceNotFoundException;
import com.clicks.secured_qr_backend.models.AppUser;
import com.clicks.secured_qr_backend.models.Client;
import com.clicks.secured_qr_backend.models.ClientPayment;
import com.clicks.secured_qr_backend.repository.ClientPaymentRepository;
import com.clicks.secured_qr_backend.repository.ClientRepository;
import com.clicks.secured_qr_backend.repository.QRCodeDataRepository;
import com.clicks.secured_qr_backend.utils.DTOMapper;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.apache.catalina.util.URLEncoder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicReference;

@Service
@Transactional
@RequiredArgsConstructor
public class ClientPaymentService {

    private final ClientPaymentRepository clientPaymentRepository;
    private final ClientRepository clientRepository;
    private final QRCodeDataRepository qrCodeDataRepository;
    private final QRCodeDataService qrCodeDataService;
    private final ClientService clientService;
    private final DTOMapper mapper;
    private final AppUserService userService;
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${client.scanner}")
    private String checkoutBaseUrl;

    @Value("${flutterwave.secrete}")
    private String flutterWaveSecreteKey;

    /**
     * Creates a QR code resource represent a new client payment and returns the
     * corresponding QR code.
     *
     * @param paymentRequest The payment request containing client reference,
     *                       amount, description, and item.
     * @return The generated QR code response.
     */
    public QrCodeResponse create(NewPaymentRequest paymentRequest) {
        // Find the client by reference
        Client client = clientService.findByReference(paymentRequest.client());

        // Generate a unique reference for the payment
        String reference = UUID.randomUUID().toString();

        // Create a new client payment object
        ClientPayment payment = ClientPayment.builder()
                .createdAt(LocalDateTime.now())
                .client(client)
                .amount(paymentRequest.amount())
                .description(paymentRequest.description())
                .itemName(paymentRequest.item())
                .reference(reference)
                .build();

        // Construct the checkout URL
        String checkOutUrl = checkoutBaseUrl + "/checkout?reference=" + reference;

        // Save the client payment
        clientPaymentRepository.save(payment);

        // Create and return the QR code response
        return qrCodeDataService.create(new QrCodeDto(checkOutUrl, paymentRequest.item(), paymentRequest.amount()),
                client);
    }

    /**
     * Retrieves client payment details for the given reference.
     *
     * @param reference The reference of the client payment.
     * @return The client payment details.
     */
    public ClientPaymentDto checkout(String reference) {
        // Find the client payment by reference
        ClientPayment clientPayment = clientPaymentRepository.findByReference(reference)
                .orElseThrow(() -> new ResourceNotFoundException("Payment with reference " + reference + " not found"));
        return mapper.clientPaymentDto(clientPayment);
    }

    /**
     * Gets a list of QR code responses for the clients associated with the
     * authenticated user.
     *
     * @param authentication The authentication object.
     * @return List of QR code responses.
     */
    public List<QrCodeResponse> get(Authentication authentication) {
        // Find the user by email
        AppUser user = userService.findByEmail(authentication.getName());

        // Find the clients associated with the user
        List<Client> clients = clientRepository.findByUserId(user.getId());

        // Extract client IDs
        List<Long> ids = clients.stream().map(Client::getId).toList();

        // Retrieve QR code data for each client ID
        return ids.stream()
                .map(qrCodeDataRepository::findByClient_Id)
                .flatMap(Collection::stream)
                .map(mapper::qrCodeResponse)
                .toList();
    }

    public String confirm(ConfirmPaymentRequest confirmPaymentRequest) {

        ClientPaymentDto paymentDto = checkout(confirmPaymentRequest.reference());
        try {

            String link = sendPaymentRequest(paymentDto, confirmPaymentRequest.customerEmail(),
                    confirmPaymentRequest.customerPhone(), confirmPaymentRequest.customerName());
            return link;

        } catch (Exception e) {
            throw new InvalidParamsException("Unable to proceed");
        }

    }

    /**
     * Sends a payment request to the Flutterwave API and returns the payment link.
     *
     * @param clientPaymentDto  The DTO containing payment details.
     * @param customerEmail     The email address of the customer.
     * @param customerPhone     The phone number of the customer.
     * @param customerName      The name of the customer.
     * @return The payment link from the Flutterwave API response.
     * @throws Exception If there is an issue with the HTTP request or response.
     */
    public String sendPaymentRequest(
            ClientPaymentDto clientPaymentDto,
            String customerEmail,
            String customerPhone,
            String customerName) throws Exception {

        // Flutterwave API endpoint for payments.
        String apiUrl = "https://api.flutterwave.com/v3/payments";

        // Initialize an AtomicReference to hold the payment link.
        AtomicReference<String> link = new AtomicReference<>("");

        // Create a map to represent the JSON body of the request.
        Map<Object, Object> jsonBody = new HashMap<>();

        // Populate the JSON body with payment details.
        jsonBody.put("tx_ref", UUID.randomUUID().toString());
        jsonBody.put("amount", clientPaymentDto.amount());
        jsonBody.put("currency", "NGN");
        jsonBody.put("redirect_url", checkoutBaseUrl + "/payment/success");

        // Create a map for customer details.
        Map<Object, Object> customer = new HashMap<>();
        customer.put("email", customerEmail);
        customer.put("phonenumber", customerPhone);
        customer.put("name", customerName);

        // Add customer details to the JSON body.
        jsonBody.put("customer", customer);

        // Create an HTTP client.
        HttpClient client = HttpClient.newHttpClient();

        // Build the HTTP request.
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + flutterWaveSecretKey)
                .POST(buildRequestBodyFromMap(jsonBody))
                .build();

        // Send the HTTP request asynchronously.
        CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request,
                HttpResponse.BodyHandlers.ofString());

        // Handle the response when it is available.
        responseFuture.thenAccept(response -> {
            if (response.statusCode() == 200) {
                // Parse the response body to extract the payment link.
                String responseBody = response.body();
                link.set(parseResponse(responseBody));
            } else {
                // Log an error message if the response code is not 200.
                System.err.println("Error: " + response.statusCode() + " - " + response.body());
            }
        });

        // Log a message indicating the point of asynchronous execution.
        System.out.println("Here");

        // Synchronously wait for the HTTP request to complete.
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Parse the response and return the payment link.
        if (response.statusCode() == 200) {
            return parseResponse(response.body());
        } else {
            // Throw an exception if the response code is not 200.
            throw new RuntimeException("Failed to get payment link. Response code: " + response.statusCode());
        }
    }


    private HttpRequest.BodyPublisher buildRequestBodyFromMap(Map<Object, Object> data) {
        // Convert the map to a JSON-formatted string
        try {
            return HttpRequest.BodyPublishers.ofString(objectMapper.writeValueAsString(data));
        } catch (Exception e) {
            throw new RuntimeException("Failed to convert map to JSON.", e);
        }
    }

    private String parseResponse(String responseBody) {
        // Parse the JSON response using Jackson
        try {
            JsonNode jsonNode = objectMapper.readTree(responseBody);
            JsonNode dataNode = jsonNode.path("data");
            if (dataNode.isMissingNode()) {
                throw new RuntimeException("Failed to find 'data' node in the response.");
            }
            JsonNode linkNode = dataNode.path("link");
            if (linkNode.isMissingNode()) {
                throw new RuntimeException("Failed to find 'link' node in the response.");
            }
            return linkNode.asText();
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse payment link from the response.", e);
        }
    }

}
