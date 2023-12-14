package com.clicks.secured_qr_backend.service;

import com.clicks.secured_qr_backend.dtos.requests.LoginRequest;
import com.clicks.secured_qr_backend.dtos.requests.PasswordResetRequest;
import com.clicks.secured_qr_backend.dtos.requests.RegistrationRequest;
import com.clicks.secured_qr_backend.exceptions.ResourceNotFoundException;
import com.clicks.secured_qr_backend.exceptions.UnauthorizedUserException;
import com.clicks.secured_qr_backend.models.ActivationKey;
import com.clicks.secured_qr_backend.models.AppUser;
import com.clicks.secured_qr_backend.models.AuthToken;
import com.clicks.secured_qr_backend.repository.AuthRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.time.temporal.ChronoUnit.HOURS;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtEncoder jwtEncoder;
    private final JwtDecoder jwtDecoder;
    private final PasswordEncoder passwordEncoder;
    private final AuthRepository authRepository;
    private final AppUserService userService;
    private final ActivationKeyService activationKeyService;

    public String login(LoginRequest loginRequest, HttpServletRequest request) {

        // Authenticate the user based on the provided username and password.
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.email(),
                        loginRequest.password()));

        // Get the username from the authenticated user.
        String username = authentication.getName();
        // Get the login origin (client IP address) from the request.
        String loginOrigin = request.getRemoteAddr();

        // Check if there is an existing authentication token for the user.
        Optional<AuthToken> userOptional = authRepository.findBySubject(username);

        userOptional.ifPresent(authRepository::delete);

        // Generate timestamps for token expiration.
        Instant now = Instant.now();
        Instant expiresAt = now.plus(12, HOURS);

        // Generate the scope for the access token based on user authorities.
        String scope = authentication.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(" "));

        // Build the JWT claims set with issuer, issuedAt, expiresAt, subject, and
        // custom claims.
        JwtClaimsSet jwtClaimsSet = JwtClaimsSet.builder()
                .issuer("ccm")
                .issuedAt(now)
                .expiresAt(expiresAt)
                .subject(username)
                .claim("claim", scope)
                .claim("origin", loginOrigin)
                .build();

        // Encode the JWT with HS512 algorithm using the claims set.
        var encoderParams = JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS512).build(), jwtClaimsSet);
        String accessToken = jwtEncoder.encode(encoderParams).getTokenValue();

        // Create a new authentication token and save it.
        AuthToken token = AuthToken.builder()
                .origin(loginOrigin)
                .generatedAt(now)
                .expiresAt(expiresAt)
                .isValid(true)
                .token(accessToken)
                .subject(username)
                .isLoggedIn(true)
                .build();

        authRepository.save(token);

        // Return the generated access token.
        return accessToken;
    }

    /**
     * Registers a new user based on the provided registration request.
     *
     * @param registrationRequest The request containing user registration information.
     */
    public void register(RegistrationRequest registrationRequest) {
        // Delegate the user registration process to the userService.
        userService.registerUser(registrationRequest);
    }

    /**
     * Initiates a password reset request for the specified email address.
     * Updates the user's password with the new encoded password.
     *
     * @param passwordResetRequest The request containing the email and new password.
     */
    public void passwordResetRequest(PasswordResetRequest passwordResetRequest) {
        // Retrieve the user by email to perform the password reset.
        AppUser user = userService.findByEmail(passwordResetRequest.email());

        // Set the user's password to the new encoded password.
        user.setPassword(passwordEncoder.encode(passwordResetRequest.password()));
    }

    /**
     * Checks if a user with the given email exists.
     * Returns the email if the user exists, otherwise throws a ResourceNotFoundException.
     *
     * @param email The email address to check for existence.
     * @return The email if the user exists.
     * @throws ResourceNotFoundException If the user with the specified email is not found.
     */
    public String passwordResetRequest(String email) {
        // Check if the user exists based on the provided email.
        if (userService.userExists(email)) {
            return email; // User exists, return the email.
        } else {
            throw new ResourceNotFoundException("Email not found"); // User not found, throw an exception.
        }
    }

    /**
     * Activates a user account using the provided activation token.
     * Updates the user's status in the userService.
     *
     * @param token The activation token to activate the user account.
     */
    public void activate(String token) {
        // Activate the user account based on the provided activation token.
        ActivationKey activationKey = activationKeyService.activate(token);
        userService.activateUser(activationKey.getEmail());
    }


    /**
     * Logs out the user identified by the provided authentication and HttpServletRequest.
     *
     * @param authentication The authentication object representing the current user.
     * @param request The HttpServletRequest object associated with the logout request.
     * @throws UnauthorizedUserException If the token is invalid or empty.
     */
    public void logout(Authentication authentication, HttpServletRequest request) {

        // Retrieve the JWT token from the authentication object.
        Optional<String> tokenOptional = Optional.ofNullable(((JwtAuthenticationToken) authentication)
                .getToken()
                .getTokenValue());

        // Extract user information and request details.
        String user = authentication.getName();
        String requestRemoteAddress = request.getRemoteAddr();

        // Check if the token is empty, and log a debug message if so.
        if (tokenOptional.isEmpty()) {
            log.debug("Empty token passed by user {} at {}", user, Instant.now());
            throw new UnauthorizedUserException("Invalid or empty token");
        }

        // Retrieve the token string from the optional.
        String requestTokenString = tokenOptional.get();

        try {
            // Decode the JWT token.
            Jwt decodedJwtString = jwtDecoder.decode(requestTokenString);

            // Find the AuthToken associated with the remote address.
            AuthToken authToken = findTokenByRemoteAddress(requestRemoteAddress);

            // Check if the token is valid, and throw an exception if not.
            if (!isValidToken(authToken, requestRemoteAddress, decodedJwtString)) {
                log.info("Invalid token passed {}", requestTokenString);
                throw new UnauthorizedUserException("Invalid or empty token");
            }

            // Invalidate the AuthToken by setting it to not logged in and not valid.
            authToken.setIsLoggedIn(false);
            authToken.setIsValid(false);

            // Log the successful logout.
            log.info("User {} logged out from address {} ", user, requestRemoteAddress);

        } catch (JwtException e) {
            // Handle the case where the token is empty or invalid.
            log.debug("Empty or invalid token passed by user {} at {} from {}",
                    user, Instant.now(), requestRemoteAddress);

            throw new UnauthorizedUserException("Invalid or empty token");
        }
    }


    private AuthToken findTokenByRemoteAddress(String remoteAddress) {
        return authRepository.findByOrigin(remoteAddress)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid or Illegal Token"));
    }

    /**
     * Checks the validity of a given JWT token against the corresponding AuthToken in the database.
     *
     * @param authToken            The AuthToken retrieved from the database.
     * @param requestRemoteAddress The remote address from the HttpServletRequest.
     * @param decodedString        The decoded JWT string.
     * @return True if the token is valid; false otherwise.
     */
    private boolean isValidToken(AuthToken authToken, String requestRemoteAddress, Jwt decodedString) {

        // Retrieve the token from the AuthToken in the database.
        String tokenFromDb = authToken.getToken();

        // Check various conditions to determine the validity of the token.
        return authToken.getIsLoggedIn() &&
                Objects.equals(requestRemoteAddress, decodedString.getClaimAsString("origin")) &&
                Objects.equals(authToken.getSubject(), decodedString.getSubject()) &&
                Objects.equals(tokenFromDb, decodedString.getTokenValue()) &&
                authToken.getExpiresAt().isAfter(Instant.now());
    }

}
