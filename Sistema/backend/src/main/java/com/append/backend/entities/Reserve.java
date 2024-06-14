package com.append.backend.entities;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;

@Entity
@Table(name = "tb_reserves")
public class Reserve implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch =  FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User owner;

    @ManyToOne(fetch =  FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User renter;

    @OneToOne
    @JoinColumn(name = "id_house")
    private House house;

    private double propouseValue;

    public Reserve() {}

    public Reserve(User owner, User renter, House house, double propouseValue) {
        this.owner = owner;
        this.renter = renter;
        this.house = house;
        this.propouseValue = propouseValue;
    }

    public long getId() {
        return id;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public User getRenter() {
        return renter;
    }

    public void setRenter(User renter) {
        this.renter = renter;
    }

    public House getHouse() {
        return house;
    }

    public void setHouse(House house) {
        this.house = house;
    }

    public double getPropouseValue() {
        return propouseValue;
    }

    public void setPropouseValue(double propouseValue) {
        this.propouseValue = propouseValue;
    }
}
