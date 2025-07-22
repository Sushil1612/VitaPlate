package com.cdac.vitaplate.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.vitaplate.dto.PlaceOrderRequest;
import com.cdac.vitaplate.entities.Order;
import com.cdac.vitaplate.services.OrderService;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place-order")
    public ResponseEntity<Order> placeOrder(@RequestBody PlaceOrderRequest request) {
        return ResponseEntity.ok(orderService.placeOrder(request));
    }

    @GetMapping("/mom/{momId}/active")
    public ResponseEntity<List<Order>> getActiveOrders(@PathVariable Long momId) {
        return ResponseEntity.ok(orderService.getActiveOrdersForMom(momId));
    }

    @PostMapping("/{orderId}/accept")
    public ResponseEntity<Order> acceptOrder(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderService.acceptOrder(orderId));
    }

    @PostMapping("/{orderId}/reject")
    public ResponseEntity<Order> rejectOrder(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderService.rejectOrder(orderId));
    }

}
