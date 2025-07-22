package com.cdac.vitaplate.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.vitaplate.entities.Feedback;
import com.cdac.vitaplate.entities.User;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByOrderMom(User mom); // All feedbacks for a MOM

    boolean existsByOrderId(Long orderId);
}