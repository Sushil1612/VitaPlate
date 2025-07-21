package com.cdac.vitaplate.serviceImpl;

import com.cdac.vitaplate.dto.ActiveOrdersDTO;
import com.cdac.vitaplate.dto.OrderRequestDTO;
import com.cdac.vitaplate.entities.Order;
import com.cdac.vitaplate.entities.Tiffin;
import com.cdac.vitaplate.entities.User;
import com.cdac.vitaplate.repositories.OrderRepository;
import com.cdac.vitaplate.repositories.TiffinRepository;
import com.cdac.vitaplate.repositories.UserRepository;
import com.cdac.vitaplate.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

        @Autowired
        private OrderRepository orderRepository;

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private TiffinRepository tiffinRepository;

        @Override
        public Order createOrder(OrderRequestDTO dto) {
                User customer = userRepository.findById(dto.getCustomerId())
                                .orElseThrow(() -> new RuntimeException("Customer not found"));

                User mom = userRepository.findById(dto.getMomId())
                                .orElseThrow(() -> new RuntimeException("MOM not found"));

                Tiffin tiffin = tiffinRepository.findById(dto.getTiffinId())
                                .orElseThrow(() -> new RuntimeException("Tiffin not found"));

                User deliveryPerson = null;
                if (dto.getDeliveryPersonId() != null) {
                        deliveryPerson = userRepository.findById(dto.getDeliveryPersonId())
                                        .orElseThrow(() -> new RuntimeException("Delivery person not found"));
                }

                Order order = new Order();
                order.setCustomer(customer);
                order.setMom(mom);
                order.setTiffin(tiffin);
                order.setDeliveryPerson(deliveryPerson);
                order.setDeliveryAddress(dto.getDeliveryAddress());
                order.setOrderedAt(LocalDateTime.now());
                order.setOrderStatus(dto.getOrderStatus() != null ? dto.getOrderStatus() : Order.OrderStatus.PLACED);

                return orderRepository.save(order);
        }

        @Override
        public List<ActiveOrdersDTO> getActiveOrdersForMom(Long momId) {
                LocalDateTime cutoffTime = LocalDateTime.now().minusMinutes(90);
                List<Order> orders = orderRepository.findRecentActiveOrdersByMomId(momId, cutoffTime);

                return orders.stream().map(order -> {
                        ActiveOrdersDTO dto = new ActiveOrdersDTO();
                        dto.setOrderId(order.getId());
                        dto.setCustomerName(order.getCustomer().getName());
                        dto.setTiffinName(order.getTiffin().getName());
                        dto.setOrderedAt(order.getOrderedAt());
                        dto.setDeliveryAddress(order.getDeliveryAddress());
                        return dto;
                }).toList();
        }

}
