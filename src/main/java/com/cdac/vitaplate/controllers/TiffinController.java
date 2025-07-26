package com.cdac.vitaplate.controllers;

import com.cdac.vitaplate.entities.*;
import com.cdac.vitaplate.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tiffins")
public class TiffinController {
    @Autowired
    private TiffinService tiffinService;

    @PostMapping("/create")
    public ResponseEntity<Tiffin> createTiffin(@RequestBody Tiffin tiffin) {
        return ResponseEntity.ok(tiffinService.createTiffin(tiffin));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tiffin> updateTiffin(@PathVariable Long id, @RequestBody Tiffin tiffin) {
        return ResponseEntity.ok(tiffinService.updateTiffin(id, tiffin));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tiffin> getTiffinById(@PathVariable Long id) {
        return tiffinService.getTiffinById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Tiffin>> getAllTiffins() {
        return ResponseEntity.ok(tiffinService.getAllTiffins());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTiffin(@PathVariable Long id) {
        tiffinService.deleteTiffin(id);
        return ResponseEntity.noContent().build();
    }
}

