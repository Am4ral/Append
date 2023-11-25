package com.append.backend.dto;

import com.append.backend.entities.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;
import java.io.Serial;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UserDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private long id;

    @NotBlank(message = "Campo Obrigatório")
    private String name;
    @Email(message = "Favor adicionar um email válido")
    private String email;

    private Set<RoleDTO> roles = new HashSet<>();

    public UserDTO(){}

    public UserDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public UserDTO(User entity){
        this.id = entity.getId();
        this.name = entity.getName();
        this.email = entity.getEmail();
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<RoleDTO> getRoles() {
        return roles;
    }

    public void setRoles(Set<RoleDTO> roles) {
        this.roles = roles;
    }
}
