package com.cdac.vitaplate.dto;

import lombok.*;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MenuItemDTO {
    private String name;
    private String description;
    private BigDecimal price;
    private boolean isAvailable;
}
