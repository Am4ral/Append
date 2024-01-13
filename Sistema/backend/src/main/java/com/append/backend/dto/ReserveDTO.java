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

    private long owner;
    private double propouseValue;


    public ReserveDTO() {}

    public ReserveDTO(long renter, long house, long owner, double propouseValue) {
        this.renter = renter;
        this.house = house;
        this.owner = owner;
        this.propouseValue = propouseValue;
    }

    public ReserveDTO(Reserve entity){
        this.id = entity.getId();
        this.renter = entity.getRenter().getId();
        this.house = entity.getHouse().getId();
        this.owner = entity.getHouse().getOwner().getId();
        this.propouseValue =  entity.getPropouseValue();

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

    public double getPropouseValue() {
        return propouseValue;
    }

    public void setPropouseValue(double propouseValue) {
        this.propouseValue = propouseValue;
    }

    public long getOwner() {
        return owner;
    }

    public void setOwner(long owner) {
        this.owner = owner;
    }
}
