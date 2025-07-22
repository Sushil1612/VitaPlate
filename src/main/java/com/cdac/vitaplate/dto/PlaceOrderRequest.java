package com.cdac.vitaplate.dto;

import java.util.List;

import lombok.Data;

@Data
public class PlaceOrderRequest {
    private Long customerId;
    private Long momId;
    private List<Long> menuItemIds;
    private String deliveryAddress;
}
