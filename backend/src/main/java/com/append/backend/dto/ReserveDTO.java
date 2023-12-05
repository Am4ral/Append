package com.append.backend.dto;


import com.append.backend.entities.House;
import com.append.backend.entities.Reserve;
import jakarta.persistence.*;


import java.io.Serializable;


public class ReserveDTO implements Serializable {
    
    private static final long serialVersionUID = 1L;
    private long id;
    private long renter;
    private long house;


    public ReserveDTO() {}

    public ReserveDTO(long renter, long house) {
        this.renter = renter;
        this.house = house;
    }


    public ReserveDTO(Reserve entity){
        this.id = entity.getId();
        this.renter = entity.getRenter().getId();
        this.house = entity.getHouse().getId();

    }

    public long getId() {
        return id;
    }

    public long getRenter() {
        return renter;
    }

    public long getHouse() {
        return house;
    }

    public void setHouse(long house) {
        this.house = house;
    }

    public void setRenter(long renter) {
        this.renter = renter;
    }



}
