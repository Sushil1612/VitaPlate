package com.cdac.vitaplate.repositories;

import com.cdac.vitaplate.entities.Order;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o FROM Order o " +
            "JOIN FETCH o.tiffin " +
            "JOIN FETCH o.customer " +
            "WHERE o.mom.id = :momId " +
            "AND o.orderStatus <> 'DELIVERED' " +
            "AND o.orderedAt >= :timeLimit")
    List<Order> findRecentActiveOrdersByMomId(@Param("momId") Long momId, @Param("timeLimit") LocalDateTime timeLimit);

}
