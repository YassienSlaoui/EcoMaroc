package com.ecoMaroc.backendpart.controller;

import com.ecoMaroc.backendpart.dto.AuthRequest;
import com.ecoMaroc.backendpart.dto.UserDTO;
import com.ecoMaroc.backendpart.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@Tag(name = "Authentication Controller", description = "Operations related for Authentication and registration of new User")
public class AuthController {
    private final UserService userService;

    public AuthController (UserService userService){
        this.userService = userService;
    }

    @Operation(summary = "Authentication using username and password")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "success login")
    })
    @PostMapping("/login")
    public String login (@RequestBody AuthRequest authRequest){
        return userService.createAuthenticationToken(authRequest);
    }
    @Operation(summary = "Register a new user ")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User added")
    })
    @PostMapping("/register")
    public void register ( @RequestBody UserDTO user){
         userService.registerUser(user);
    }


}
