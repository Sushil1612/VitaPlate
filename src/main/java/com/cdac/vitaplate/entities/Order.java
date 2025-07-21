package com.cdac.vitaplate.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Reference to customer (User)
    @ManyToOne(optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    private User customer;

    // Reference to tiffin
    @ManyToOne(optional = false)
    @JoinColumn(name = "tiffin_id", nullable = false)
    private Tiffin tiffin;

    // Reference to mom (User with role MOM)
    @ManyToOne(optional = false)
    @JoinColumn(name = "mom_id", nullable = false)
    private User mom;

    // Reference to delivery person (User with role DELIVERY)
    @ManyToOne
    @JoinColumn(name = "delivery_person_id")
    private User deliveryPerson;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus orderStatus;

    private String deliveryAddress;

    private LocalDateTime orderedAt;

    private LocalDateTime deliveredAt;

    @PrePersist
    protected void onOrder() {
        this.orderedAt = LocalDateTime.now();
        this.orderStatus = OrderStatus.PLACED;
    }

    // Enum for order status
    public enum OrderStatus {
        PLACED,
        PREPARING,
        READY_FOR_DELIVERY,
        DELIVERED
    }

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RequestStatus requestStatus = RequestStatus.PENDING;

}
