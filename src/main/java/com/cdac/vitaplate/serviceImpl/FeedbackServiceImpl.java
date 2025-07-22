package com.cdac.vitaplate.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.vitaplate.dto.FeedbackRequest;
import com.cdac.vitaplate.entities.Feedback;
import com.cdac.vitaplate.entities.Order;
import com.cdac.vitaplate.entities.User;
import com.cdac.vitaplate.repositories.FeedbackRepository;
import com.cdac.vitaplate.repositories.OrderRepository;
import com.cdac.vitaplate.repositories.UserRepository;
import com.cdac.vitaplate.services.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService{

    @Autowired
    private FeedbackRepository feedbackRepo ;

    @Autowired
    private OrderRepository orderRepo ;

    @Autowired
    private UserRepository userRepo ;

    @Override
    public Feedback submitFeedback(FeedbackRequest request) {
        if (feedbackRepo.existsByOrderId(request.getOrderId())) {
            throw new RuntimeException("Feedback already submitted for this order.");
        }

        Order order = orderRepo.findById(request.getOrderId())
                .orElseThrow(() -> new RuntimeException("Order not found"));

        if (order.getOrderStatus() != Order.OrderStatus.DELIVERED) {
            throw new RuntimeException("Feedback can only be given on delivered orders.");
        }

        Feedback feedback = new Feedback();
        feedback.setOrder(order);
        feedback.setRating(request.getRating());
        feedback.setComment(request.getComment());

        return feedbackRepo.save(feedback);
    }

    @Override
    public List<Feedback> getFeedbackForMom(Long momId) {
        User mom = userRepo.findById(momId)
                .orElseThrow(() -> new RuntimeException("MOM not found"));
        return feedbackRepo.findByOrderMom(mom);
    }
}
