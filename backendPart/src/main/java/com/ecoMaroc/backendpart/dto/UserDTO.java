package com.ecoMaroc.backendpart.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
@Schema(description = "User DTO  ")
public class UserDTO {
    @Schema(description = "User matricule")
    private String matricule;
    @Schema(description = "User password")
    private String password;
    @Schema(description = "User mail")
    private String mail;
    @Schema(description = "User code Validation if user forget his password and send forget password this code will be send it in gmail")
    private Long codeValidation;

    @Schema(description = "List of user roles")
    private List<String> roles;


}
