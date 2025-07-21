package com.cdac.vitaplate.controllers;

import com.cdac.vitaplate.dto.MenuRequest;
import com.cdac.vitaplate.entities.*;
import com.cdac.vitaplate.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menus")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @PostMapping("/addMenu")
    public ResponseEntity<Menu> createMenu(@RequestBody MenuRequest dto) {
        return ResponseEntity.ok(menuService.createMenu(dto));
    }

    // @PutMapping("/{id}")
    // public ResponseEntity<Menu> updateMenu(@PathVariable Long id, @RequestBody Menu menu) {
    //     return ResponseEntity.ok(menuService.updateMenu(id, menu));
    // }

    @GetMapping("/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable Long id) {
        return menuService.getMenuById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Menu>> getAllMenus() {
        return ResponseEntity.ok(menuService.getAllMenus());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
        return ResponseEntity.noContent().build();
    }
}
