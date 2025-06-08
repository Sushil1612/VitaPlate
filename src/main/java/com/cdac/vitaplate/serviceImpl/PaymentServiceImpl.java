package com.cdac.vitaplate.serviceImpl;

import com.cdac.vitaplate.entities.Payment;
import com.cdac.vitaplate.repositories.PaymentRepository;
import com.cdac.vitaplate.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    @Override
    public Payment updatePayment(Long id, Payment updatedPayment) {
        return paymentRepository.findById(id).map(existingPayment -> {
            existingPayment.setOrder(updatedPayment.getOrder());
            existingPayment.setAmount(updatedPayment.getAmount());
            existingPayment.setPaymentMode(updatedPayment.getPaymentMode());
            existingPayment.setPaymentStatus(updatedPayment.getPaymentStatus());
            // We don't manually set paidAt here since @PrePersist already handles it on creation
            return paymentRepository.save(existingPayment);
        }).orElseThrow(() -> new RuntimeException("Payment not found with id: " + id));
    }

    @Override
    public Optional<Payment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public void deletePayment(Long id) {
        if (!paymentRepository.existsById(id)) {
            throw new RuntimeException("Payment not found with id: " + id);
        }
        paymentRepository.deleteById(id);
    }
}

