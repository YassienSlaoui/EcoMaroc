package com.ecoMaroc.backendpart.services.impl;

import com.ecoMaroc.backendpart.config.JwtUtil;
import com.ecoMaroc.backendpart.dto.AuthRequest;
import com.ecoMaroc.backendpart.dto.UserDTO;
import com.ecoMaroc.backendpart.mapper.UserMapper;
import com.ecoMaroc.backendpart.model.UserEntity;
import com.ecoMaroc.backendpart.repository.UserRepository;
import com.ecoMaroc.backendpart.services.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JwtUtil jwtUtil;

    private final UserDetailsService userDetailsService;

    public UserServiceImpl(UserRepository userRepository,UserMapper userMapper
            ,PasswordEncoder passwordEncoder,AuthenticationManager authenticationManager,
                           JwtUtil jwtUtil,UserDetailsService userDetailsService){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public void registerUser(UserDTO userDTO) {
        UserEntity user = userMapper.userDTOToUser(userDTO);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public String createAuthenticationToken(AuthRequest authRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
        );

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());

        return jwtUtil.generateToken(userDetails);
    }


}
