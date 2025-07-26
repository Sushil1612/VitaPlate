package com.cdac.vitaplate.controllers;

import com.cdac.vitaplate.dto.MenuDTO;
import com.cdac.vitaplate.dto.MenuRequest;
import com.cdac.vitaplate.entities.*;
import com.cdac.vitaplate.services.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menus")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @PreAuthorize("hasRole('MOM')")
    @PostMapping("/add-menu")
    public ResponseEntity<Menu> createMenu(@RequestBody MenuRequest dto) {
        return ResponseEntity.ok(menuService.createMenu(dto));
    }

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

    @PreAuthorize("hasRole('CUSTOMER')")
    @GetMapping("/all-menus-today")
    public List<MenuDTO> getTodayMenus() {
        return menuService.getTodayMenus();
    }
}
