package com.cdac.vitaplate.repositories;

import com.cdac.vitaplate.entities.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
