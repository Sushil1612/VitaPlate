package com.cdac.vitaplate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MenuDTO {
    private Long momId;
    private String momName;
    private String momAddress;
    private List<MenuItemDTO> items;
}
