package com.cdac.vitaplate.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class MenuRequest {
    private Long momId;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    private boolean isAvailable;
    
    private List<MenuItemRequest> items;
}
