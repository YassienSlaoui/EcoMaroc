package com.ecoMaroc.backendpart.mapper;

import com.ecoMaroc.backendpart.dto.UserDTO;
import com.ecoMaroc.backendpart.model.UserEntity;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, unmappedSourcePolicy = ReportingPolicy.IGNORE)


public interface UserMapper {
    @Mapping(target = "matricule", source = "username")
    @Mapping(target = "resetPasswordToken", source = "resetPasswordToken")
    @Mapping(target = "codeValidation", source = "codeValidation")
    @Mapping(target = "mail", source = "mail")
    @Mapping(target = "password", source = "password")
    @Mapping(target = "roles", source = "roles")
    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)
    UserDTO userToUserDTO(UserEntity user);

    @Mapping(target = "username", source = "matricule")
    @Mapping(target = "resetPasswordToken", source = "resetPasswordToken")
    @Mapping(target = "codeValidation", source = "codeValidation")
    @Mapping(target = "mail", source = "mail")
    @Mapping(target = "password", source = "password")
    @Mapping(target = "roles", source = "roles")
    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)
    UserEntity userDTOToUser(UserDTO user);
}
