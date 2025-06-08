package com.cdac.vitaplate.services;

import com.cdac.vitaplate.entities.Payment;

import java.util.List;
import java.util.Optional;

public interface PaymentService {
    Payment createPayment(Payment payment);
    Payment updatePayment(Long id, Payment payment);
    Optional<Payment> getPaymentById(Long id);
    List<Payment> getAllPayments();
    void deletePayment(Long id);
}

