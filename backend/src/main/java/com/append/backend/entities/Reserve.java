package com.append.backend.entities;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "tb_reserves")
public class Reserve implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "id_owner")
    private User owner;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "id_renter")
    private User renter;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "id_house")
    private House house;

    public Reserve() {}

    public Reserve(User owner, User renter, House house) {
        this.owner = owner;
        this.renter = renter;
        this.house = house;
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
}
