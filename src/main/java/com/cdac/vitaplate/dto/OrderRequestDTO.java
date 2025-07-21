package com.cdac.vitaplate.dto;

import com.cdac.vitaplate.entities.Order.OrderStatus;
import lombok.Data;

@Data
public class OrderRequestDTO {
    private Long customerId;
    private Long momId;
    private Long tiffinId;
    private Long deliveryPersonId; 
    private String deliveryAddress;
    private OrderStatus orderStatus;
}