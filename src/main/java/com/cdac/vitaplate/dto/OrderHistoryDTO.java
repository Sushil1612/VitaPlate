package com.cdac.vitaplate.dto;

import lombok.*;
import java.time.LocalDateTime;
import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderHistoryDTO {
    private Long orderId;
    private String tiffinName;
    private String tiffinDescription;
    private BigDecimal tiffinPrice;
    private String momName;
    private String momAddress;
    private LocalDateTime orderedAt;
    private LocalDateTime deliveredAt;
}
