package com.cdac.vitaplate.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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

    // Reference to MOM (User)
    @ManyToOne(optional = false)
    @JoinColumn(name = "mom_id", nullable = false)
    private User mom;

    private LocalDate date;

    private boolean isAvailable;

    // List of menu items
    @OneToMany(mappedBy = "menu", cascade = CascadeType.ALL)
    @JsonManagedReference

    private List<MenuItem> items;
}
