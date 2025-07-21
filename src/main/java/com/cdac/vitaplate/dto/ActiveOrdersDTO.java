package com.cdac.vitaplate.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ActiveOrdersDTO {
    private Long orderId;
    private String customerName;
    private String tiffinName;
    private LocalDateTime orderedAt;
    private String deliveryAddress;
}
