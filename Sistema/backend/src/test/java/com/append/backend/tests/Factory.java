package com.append.backend.tests;

import com.append.backend.entities.User;
import com.append.backend.dto.UserDTO;

import java.time.Instant;

public class Factory {
    public static User createUser() {
        User user = new User(1L, "marco", "marco@gmail.com", "senha123");
        return user;
    }

    public static UserDTO createUserDTO() {
        User user = createUser();
        return new UserDTO(user);
    }
}