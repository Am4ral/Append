package com.append.backend.dto;

import com.append.backend.entities.User;

import java.io.Serial;
import java.io.Serializable;

public class UserDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private long id;
    private String name;

    public UserDTO(){}

    public UserDTO(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public UserDTO(User entity){
        this.id = entity.getId();
        this.name = entity.getName();
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


}
