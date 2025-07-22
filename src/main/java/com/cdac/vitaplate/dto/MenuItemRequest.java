package com.cdac.vitaplate.dto;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class MenuItemRequest {
    private String name;
    private String description;
    private boolean isAvailable;
    private BigDecimal price;
}
