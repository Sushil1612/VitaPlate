package com.cdac.vitaplate.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "tiffins")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Tiffin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Reference to User entity, typically with role MOM
    @ManyToOne(optional = false)
    @JoinColumn(name = "mom_id", nullable = false)
    private User mom;

    private String name;

    @Column(length = 1000)
    private String description;

    private BigDecimal price;

    private boolean isAvailable;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
