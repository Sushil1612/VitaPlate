package com.cdac.vitaplate.serviceImpl;

import com.cdac.vitaplate.dto.ActiveOrdersDTO;
import com.cdac.vitaplate.dto.OrderHistoryDTO;
import com.cdac.vitaplate.dto.OrderRequestDTO;
import com.cdac.vitaplate.dto.PlaceOrderRequest;
import com.cdac.vitaplate.entities.MenuItem;
import com.cdac.vitaplate.entities.Order;
import com.cdac.vitaplate.entities.RequestStatus;
import com.cdac.vitaplate.entities.Tiffin;
import com.cdac.vitaplate.entities.User;
import com.cdac.vitaplate.repositories.MenuItemRepository;
import com.cdac.vitaplate.repositories.OrderRepository;
import com.cdac.vitaplate.repositories.TiffinRepository;
import com.cdac.vitaplate.repositories.UserRepository;
import com.cdac.vitaplate.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

        @Autowired
        private OrderRepository orderRepository;

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private TiffinRepository tiffinRepository;

        @Autowired
        private MenuItemRepository menuItemRepository;

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
        public Order placeOrder(PlaceOrderRequest request) {
                // Fetch Customer
                User customer = userRepository.findById(request.getCustomerId())
                                .orElseThrow(() -> new RuntimeException("Customer not found"));

                // Fetch MOM
                User mom = userRepository.findById(request.getMomId())
                                .orElseThrow(() -> new RuntimeException("MOM not found"));

                // Fetch selected MenuItems
                List<MenuItem> selectedItems = menuItemRepository.findAllById(request.getMenuItemIds());

                if (selectedItems.isEmpty()) {
                        throw new RuntimeException("No valid menu items selected");
                }

                // Calculate total price
                BigDecimal totalPrice = selectedItems.stream()
                                .map(MenuItem::getPrice)
                                .reduce(BigDecimal.ZERO, BigDecimal::add);

                // Build Tiffin dynamically
                Tiffin tiffin = new Tiffin();
                tiffin.setMom(mom);
                tiffin.setName("Custom Tiffin for " + customer.getName());
                tiffin.setDescription(selectedItems.stream()
                                .map(MenuItem::getName)
                                .collect(Collectors.joining(", ")));
                tiffin.setPrice(totalPrice);
                tiffin.setAvailable(true);
                tiffin.setItems(selectedItems);

                tiffinRepository.save(tiffin); // Save dynamic tiffin

                // Create Order
                Order order = new Order();
                order.setCustomer(customer);
                order.setMom(mom);
                order.setTiffin(tiffin);
                order.setDeliveryAddress(request.getDeliveryAddress());
                // orderStatus and orderedAt handled via @PrePersist

                return orderRepository.save(order);
        }

        @Override
        public List<Order> getActiveOrdersForMom(Long momId) {
                LocalDateTime cutoffTime = LocalDateTime.now().minusMinutes(90); // 1.5 hours
                return orderRepository.findActiveOrdersForMom(momId, cutoffTime);
        }

        @Override
        public Order acceptOrder(Long orderId) {
                Order order = orderRepository.findById(orderId)
                                .orElseThrow(() -> new RuntimeException("Order not found"));
                order.setRequestStatus(RequestStatus.ACCEPTED);
                order.setOrderStatus(Order.OrderStatus.PREPARING);
                return orderRepository.save(order);
        }

        @Override
        public Order rejectOrder(Long orderId) {
                Order order = orderRepository.findById(orderId)
                                .orElseThrow(() -> new RuntimeException("Order not found"));
                order.setRequestStatus(RequestStatus.REJECTED);
                return orderRepository.save(order);
        }

        @Override
        public List<OrderHistoryDTO> getCompletedOrders(Long customerId) {
                User customer = userRepository.findById(customerId)
                                .orElseThrow(() -> new RuntimeException("Customer not found"));

                List<Order> orders = orderRepository.findByCustomerAndOrderStatus(customer,
                                Order.OrderStatus.DELIVERED);

                return orders.stream().map(order -> new OrderHistoryDTO(
                                order.getId(),
                                order.getTiffin().getName(),
                                order.getTiffin().getDescription(),
                                order.getTiffin().getPrice(),
                                order.getMom().getName(),
                                order.getMom().getAddress(),
                                order.getOrderedAt(),
                                order.getDeliveredAt())).collect(Collectors.toList());
        }

}
