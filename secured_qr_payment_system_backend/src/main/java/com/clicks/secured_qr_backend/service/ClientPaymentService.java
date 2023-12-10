package com.clicks.secured_qr_backend.service;

import com.clicks.secured_qr_backend.dtos.ClientPaymentDto;
import com.clicks.secured_qr_backend.dtos.QrCodeResponse;
import com.clicks.secured_qr_backend.dtos.requests.NewPaymentRequest;
import com.clicks.secured_qr_backend.dtos.requests.QrCodeDto;
import com.clicks.secured_qr_backend.exceptions.ResourceNotFoundException;
import com.clicks.secured_qr_backend.models.AppUser;
import com.clicks.secured_qr_backend.models.Client;
import com.clicks.secured_qr_backend.models.ClientPayment;
import com.clicks.secured_qr_backend.repository.ClientPaymentRepository;
import com.clicks.secured_qr_backend.repository.ClientRepository;
import com.clicks.secured_qr_backend.repository.QRCodeDataRepository;
import com.clicks.secured_qr_backend.utils.DTOMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import static com.clicks.secured_qr_backend.utils.AppUtils.getUrl;
import static java.util.Collections.emptyMap;

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

    /**
     * Creates a QR code resource represent a new client payment and returns the corresponding QR code.
     *
     * @param paymentRequest The payment request containing client reference, amount, description, and item.
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
        String checkOutUrl = getUrl("/payment/" + reference, emptyMap());

        // Save the client payment
        clientPaymentRepository.save(payment);

        // Create and return the QR code response
        return qrCodeDataService.create(new QrCodeDto(checkOutUrl, paymentRequest.item(), paymentRequest.amount()), client);
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
     * Gets a list of QR code responses for the clients associated with the authenticated user.
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
}
