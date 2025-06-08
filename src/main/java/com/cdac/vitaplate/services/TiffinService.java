package com.cdac.vitaplate.services;

import com.cdac.vitaplate.entities.Tiffin;

import java.util.List;
import java.util.Optional;

public interface TiffinService {
    Tiffin createTiffin(Tiffin tiffin);
    Tiffin updateTiffin(Long id, Tiffin tiffin);
    Optional<Tiffin> getTiffinById(Long id);
    List<Tiffin> getAllTiffins();
    void deleteTiffin(Long id);
}

