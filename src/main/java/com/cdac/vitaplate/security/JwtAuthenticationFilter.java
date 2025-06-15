package com.cdac.vitaplate.security;

import com.cdac.vitaplate.config.JWTConfig;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JWTConfig jwtUtil;

    public JwtAuthenticationFilter(JWTConfig jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
                    String path = request.getRequestURI();
                System.out.println("------ PATH ---------" + path);
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            try {
                String email = jwtUtil.extractUsername(token);
                String role = jwtUtil.extractRole(token);

                if (email != null && role != null && !role.isEmpty()
                        && SecurityContextHolder.getContext().getAuthentication() == null) {

                    if (jwtUtil.validateToken(token, email)) {
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                                email, null,
                                Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + role)));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    } else {
                        logger.error("Invalid token for email: " + email);
                    }
                } else {
                    logger.warn("Invalid token or missing role/email");
                }
            } catch (Exception e) {
                logger.error("Token parsing failed: ", e);
                // DO NOT throw or reject; just continue
            }
        }
        filterChain.doFilter(request, response);
    }
}
