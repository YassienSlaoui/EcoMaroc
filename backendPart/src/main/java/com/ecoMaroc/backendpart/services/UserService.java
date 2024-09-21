package com.ecoMaroc.backendpart.services;

import com.ecoMaroc.backendpart.dto.AuthRequest;
import com.ecoMaroc.backendpart.dto.UserDTO;
import org.springframework.stereotype.Service;


public interface UserService {

    void registerUser(UserDTO userDTO);
    String createAuthenticationToken (AuthRequest authRequest);
}
