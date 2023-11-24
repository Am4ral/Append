package com.append.backend.dto;


import com.append.backend.entities.House;
import com.append.backend.entities.Reserve;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serial;
import java.io.Serializable;


public class ReserveDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private UserDTO owner;

    private UserDTO renter;


    public ReserveDTO() {}

    public ReserveDTO(UserDTO owner, UserDTO renter) {
        this.owner = owner;
        this.renter = renter;
    }

    public ReserveDTO(Reserve entity){
        this.id = entity.getId();
        this.owner = new UserDTO(entity.getOwner());
        this.renter = new UserDTO(entity.getOwner());

    }

    public long getId() {
        return id;
    }

    public UserDTO getOwner() {
        return owner;
    }

    public UserDTO getRenter() {
        return renter;
    }

    public void setRenter(UserDTO renter) {
        this.renter = renter;
    }



}
