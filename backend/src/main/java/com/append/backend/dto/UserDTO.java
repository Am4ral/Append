package com.append.backend.dto;

import com.append.backend.entities.House;
import com.append.backend.entities.User;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class UserDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private long id;
    private String name;
    private String email;
    private String password;
    private List<HouseDTO> houses = new ArrayList<>();

    public UserDTO(){}

    public UserDTO(String name, String email, String password, List<House> houses) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public UserDTO(User entity){
        this.id = entity.getId();
        this.name = entity.getName();
        this.email = entity.getEmail();
        this.password = entity.getPassword();
    }

    public UserDTO(User entity, List<House> houses){
        this(entity);
        houses.forEach(h -> this.houses.add(new HouseDTO(h)));
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



}
