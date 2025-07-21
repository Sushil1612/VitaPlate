package com.cdac.vitaplate.dto;

import lombok.Data;

@Data
public class MenuItemRequest {
    private String name;
    private String description;
    private boolean isAvailable;
}
