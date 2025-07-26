package com.cdac.vitaplate.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.vitaplate.dto.OrderHistoryDTO;
import com.cdac.vitaplate.dto.PlaceOrderRequest;
import com.cdac.vitaplate.entities.Order;
import com.cdac.vitaplate.services.OrderService;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PreAuthorize("hasRole('CUSTOMER')")
    @PostMapping("/place-order")
    public ResponseEntity<Order> placeOrder(@RequestBody PlaceOrderRequest request) {
        return ResponseEntity.ok(orderService.placeOrder(request));
    }

    @PreAuthorize("hasRole('CUSTOMER')")
    @GetMapping("/get-active-orders/{momId}")
    public ResponseEntity<List<Order>> getActiveOrders(@PathVariable Long momId) {
        return ResponseEntity.ok(orderService.getActiveOrdersForMom(momId));
    }

    @PreAuthorize("hasRole('MOM')")
    @PostMapping("/accept/{orderId}")
    public ResponseEntity<Order> acceptOrder(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderService.acceptOrder(orderId));
    }

    @PreAuthorize("hasRole('MOM')")
    @PostMapping("/reject/{orderId}")
    public ResponseEntity<Order> rejectOrder(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderService.rejectOrder(orderId));
    }

    @PreAuthorize("hasRole('CUSTOMER')")
    @GetMapping("/get-completed-orders/{customerId}")
    public ResponseEntity<List<OrderHistoryDTO>> getCompletedOrders(@PathVariable Long customerId) {
        return ResponseEntity.ok(orderService.getCompletedOrders(customerId));
    }

}
