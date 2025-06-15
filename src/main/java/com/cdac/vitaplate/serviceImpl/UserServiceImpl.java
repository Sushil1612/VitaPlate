package com.cdac.vitaplate.serviceImpl;

import com.cdac.vitaplate.config.JWTConfig;
import com.cdac.vitaplate.dto.JwtResponse;
import com.cdac.vitaplate.dto.LoginRequest;
import com.cdac.vitaplate.entities.User;
import com.cdac.vitaplate.repositories.UserRepository;
import com.cdac.vitaplate.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder ;

    @Autowired
    private JWTConfig jwtConfig ;

    @Override
    public User createUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists: " + user.getEmail());
        }
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPhone(updatedUser.getPhone());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setRole(updatedUser.getRole());
            existingUser.setAddress(updatedUser.getAddress());
            // createdAt should not be updated
            return userRepository.save(existingUser);
        }).orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }

    @Override
    public JwtResponse signIn(LoginRequest loginRequest) {
        String email = loginRequest.getEmail(); // Get email from login request

        User user = userRepository.findByEmail(email) ;

        // Fetch the coordinator by email
        if (!user.getIsVerified()) {
            throw new RuntimeException("User is not verified. Please complete OTP verification.");
        }

        if(user.getPassword().equals("") || user.getPassword().equals(null)){
            JwtResponse response = new JwtResponse() ;
            response.setToken(null);
            response.setMessage("Password not found for User");
            return response ;
        }

        // Fetch the password by coordinator ID
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // Generate JWT token with email as the subject
        // user sent role must be sent in ALL CAPS
        String token = jwtConfig.generateToken(email, "ROLE_" + loginRequest.getRole().toUpperCase());
        // Return JwtResponse with token and a success message
        return new JwtResponse(token, "SignIn successful");
    }

    @Override
    public String addUser(User addUserRequest) {

        if(userRepository.existsByEmail(addUserRequest.getEmail())){
            throw new RuntimeException("Email already in use");
        }
        String encodePasswoString = passwordEncoder.encode(addUserRequest.getPassword()) ;

        User user = new User() ;
        user.setAddress(addUserRequest.getAddress());
        user.setCreatedAt(LocalDateTime.now());
        user.setEmail(addUserRequest.getEmail());
        user.setName(addUserRequest.getName());
        user.setPassword(encodePasswoString);
        user.setPhone(addUserRequest.getPhone());
        user.setIsVerified(true);
        user.setRole(addUserRequest.getRole());

        User savedUser = userRepository.save(user) ;

        return savedUser.getName() + " saved successfully with role " + savedUser.getRole() ;
    }
}
