package com.append.backend.dto;



import com.append.backend.entities.House;
import com.append.backend.entities.User;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;


public class HouseDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private UserDTO owner;
    private String street;
    private String district;
    private long number;
    private String info; //Apt. number, reference points

    private double price;
    private String imgURL;

    public HouseDTO() {}

    public HouseDTO(UserDTO owner, String street, String district, long number, String info, double price, String imgURL) {
        this.owner = owner;
        this.street = street;
        this.district = district;
        this.number = number;
        this.info = info;
        this.price = price;
        this.imgURL = imgURL;
    }

    public HouseDTO(House entity){
        this.id = entity.getId();
        this.owner = new UserDTO(entity.getOwner());
        this.street = entity.getStreet();
        this.district = entity.getDistrict();
        this.number = entity.getNumber();
        this.info = entity.getInfo();
        this.price = entity.getPrice();
        this.imgURL = entity.getImgURL();
    }

    public long getId() {
        return id;
    }

    public UserDTO getOwner() {
        return owner;
    }

    public void setOwner(UserDTO owner) {
        this.owner = owner;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

}