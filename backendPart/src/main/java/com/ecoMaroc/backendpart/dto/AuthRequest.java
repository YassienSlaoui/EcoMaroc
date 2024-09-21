package com.ecoMaroc.backendpart.dto;

import lombok.Data;

@Data
public class AuthRequest {

    private String username;
    private String password;
}
