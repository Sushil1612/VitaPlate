package com.cdac.vitaplate.services;

import com.cdac.vitaplate.dto.JwtResponse;
import com.cdac.vitaplate.dto.LoginRequest;
import com.cdac.vitaplate.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User createUser(User user);

    User updateUser(Long id, User user);

    Optional<User> getUserById(Long id);

    List<User> getAllUsers();

    void deleteUser(Long id);

    JwtResponse signIn(LoginRequest loginRequest);

    String addUser(User addUserRequest);

    void generateOtp(String email);

    String verifyOtp(String email, String otp) ;
}
