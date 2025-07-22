package com.cdac.vitaplate.services;

import java.util.List;

import com.cdac.vitaplate.dto.OrderRequestDTO;
import com.cdac.vitaplate.dto.PlaceOrderRequest;
import com.cdac.vitaplate.entities.Order;

public interface OrderService {
    Order createOrder(OrderRequestDTO dto);

    List<Order> getActiveOrdersForMom(Long momId);

    Order placeOrder(PlaceOrderRequest request);

    Order acceptOrder(Long orderId);

    Order rejectOrder(Long orderId) ;

}
