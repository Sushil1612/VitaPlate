package com.cdac.vitaplate.repositories;

import com.cdac.vitaplate.entities.Menu;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
    List<Menu> findByDateAndIsAvailableTrue(LocalDate date);

}
