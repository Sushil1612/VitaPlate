package com.cdac.vitaplate.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "menus")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Reference to Tiffin entity
    @ManyToOne(optional = false)
    @JoinColumn(name = "tiffin_id", nullable = false)
    private Tiffin tiffin;

    private LocalDate date;

    private boolean isAvailable;
}
