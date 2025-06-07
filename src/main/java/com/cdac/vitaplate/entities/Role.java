package com.cdac.vitaplate.entities;

public enum Role {
    CUSTOMER("Customer user, can place and track orders"),
    MOM("Mom user, can upload meals and manage listings"),
    DELIVERY("Delivery personnel, responsible for order deliveries"),
    ADMIN("Administrator with full access to the system");

    private final String description;

    Role(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
