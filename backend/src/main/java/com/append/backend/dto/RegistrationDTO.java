package com.append.backend.dto;

import com.append.backend.entities.Role;

import java.util.Set;

public record RegistrationDTO (String name, String email, String password, Set<Role> role){
}
