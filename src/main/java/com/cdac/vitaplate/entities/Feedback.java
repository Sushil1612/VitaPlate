package com.cdac.vitaplate.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "feedbacks")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Linked to the order this feedback is about
    @OneToOne(optional = false)
    @JoinColumn(name = "order_id", nullable = false, unique = true)
    private Order order;

    @Column(nullable = false)
    private int rating; // 1 to 5

    @Column(length = 1000)
    private String comment;

    private LocalDateTime submittedAt;

    @PrePersist
    protected void onSubmit() {
        this.submittedAt = LocalDateTime.now();
    }
}
