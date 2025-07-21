package com.cdac.vitaplate.services;

import java.util.List;

import com.cdac.vitaplate.dto.ActiveOrdersDTO;
import com.cdac.vitaplate.dto.OrderRequestDTO;
import com.cdac.vitaplate.entities.Order;

public interface OrderService {
    Order createOrder(OrderRequestDTO dto);

    List<ActiveOrdersDTO> getActiveOrdersForMom(Long momId);

}
