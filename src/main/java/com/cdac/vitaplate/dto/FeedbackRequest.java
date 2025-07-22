package com.cdac.vitaplate.dto;

import lombok.Data;

@Data
public class FeedbackRequest {
    private Long orderId;
    private int rating; // 1 to 5
    private String comment;
}
