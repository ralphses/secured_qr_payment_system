package com.clicks.secured_qr_backend.models;

import com.clicks.secured_qr_backend.enums.TokenPurpose;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ActivationKey {

    // Primary key annotation indicating that 'id' is the primary key for the entity.
    @Id
    // GeneratedValue annotation to specify that the 'id' is automatically generated.
    @GeneratedValue
    private Long id;

    // Token associated with the activation key.
    private String token;

    // Email address associated with the activation key.
    private String email;

    // Date and time when the activation key expires.
    private Instant expiresAt;

    // Date and time when the activation key was created.
    private Instant createdAt;

    // Boolean flag indicating whether the activation key has been used.
    private boolean used;

    // Enum representing the purpose of the token (e.g., activation, reset password).
    private TokenPurpose purpose;