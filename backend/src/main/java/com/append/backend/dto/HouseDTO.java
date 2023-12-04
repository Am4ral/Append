package com.append.backend.dto;



import com.append.backend.entities.House;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;


import java.io.Serializable;


public class HouseDTO implements Serializable {
    
    private static final long serialVersionUID = 1L;

    private long id;
    private UserDTO owner;
    @NotBlank
    private String title;
    @NotBlank
    private String state;
    @NotBlank
    private String city;
    @NotBlank
    private String street;
    @NotBlank
    private String district;
    @Positive
    private long number;
    @NotBlank
    private String info; //Apt. number, reference points
    @Positive
    private double price;
    @NotBlank
    private String imgURL;

    public HouseDTO() {}

    public HouseDTO(UserDTO owner, String title, String state, String city, String street, String district, long number, String info, double price, String imgURL) {
        this.owner = owner;
        this.title = title;
        this.state = state;
        this.city = city;
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
        this.title = entity.getTitle();
        this.state = entity.getState();
        this.city = entity.getCity();
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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
