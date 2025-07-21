package com.cdac.vitaplate.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.vitaplate.dto.ActiveOrdersDTO;
import com.cdac.vitaplate.services.OrderService;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/active-requests/mom/{momId}")
    public ResponseEntity<List<ActiveOrdersDTO>> getActiveRequests(@PathVariable Long momId) {
        List<ActiveOrdersDTO> activeOrders = orderService.getActiveOrdersForMom(momId);
        return ResponseEntity.ok(activeOrders);
    }

}
