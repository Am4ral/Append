package com.append.backend.dto;

import com.append.backend.services.validation.UserInsertValid;

import java.io.Serial;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@UserInsertValid
public class UserInsertDTO extends UserDTO {
    @Serial
    private static final long serialVersionUID = 1L;
    private String password;

    public UserInsertDTO() {
        super();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
