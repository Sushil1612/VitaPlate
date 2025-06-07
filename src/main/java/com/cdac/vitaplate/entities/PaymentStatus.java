package com.cdac.vitaplate.entities;

public enum PaymentStatus {
    SUCCESS("Payment was successful"),
    FAILED("Payment failed"),
    PENDING("Payment is pending"),
    CANCELLED("Payment was cancelled"),
    REFUNDED("Payment was refunded");

    private final String description;

    PaymentStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
