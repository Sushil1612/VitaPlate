package com.cdac.vitaplate.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class MenuRequest {
    private Long momId;
    private LocalDate date;
    private boolean isAvailable;
    private List<MenuItemRequest> items;
}
