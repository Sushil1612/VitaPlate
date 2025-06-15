package com.cdac.vitaplate.controllers;

import com.cdac.vitaplate.dto.JwtResponse;
import com.cdac.vitaplate.dto.LoginRequest;
import com.cdac.vitaplate.dto.LoginResponse;
import com.cdac.vitaplate.entities.*;
import com.cdac.vitaplate.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/signin")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        loginRequest.setRole("coordinator");
        // Call signIn method in CoordinatorService
        JwtResponse jwtResponse = userService.signIn(loginRequest);

        // Map JwtResponse to LoginResponse
        LoginResponse loginResponse = new LoginResponse(jwtResponse.getToken(), jwtResponse.getMessage());
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/add-user")
    public String addStudent(@RequestBody User addUserRequest) {
        return userService.addUser(addUserRequest);
    }
}
