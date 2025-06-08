package com.cdac.vitaplate.repositories;

import com.cdac.vitaplate.entities.Tiffin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TiffinRepository extends JpaRepository<Tiffin, Long> {
}
