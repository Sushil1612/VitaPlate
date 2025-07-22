package com.cdac.vitaplate.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FeedbackResponse {
    private Long id;
    private int rating;
    private String comment;
    private LocalDateTime submittedAt;
    private String customerName;
    private Long orderId;
}
