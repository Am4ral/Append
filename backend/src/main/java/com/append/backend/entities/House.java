package com.append.backend.entities;



import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "tb_houses")
public class House implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch =  FetchType.LAZY)
    private User owner;
    private String street;
    private String district;
    private long number;
    @Column(columnDefinition = "TEXT")
    private String info; //Apt. number, reference points
    private double price;
    private String imgURL;

    public House() {
    }

    public House(User owner, String street, String district, long number, String info, double price, String imgURL) {
        this.owner = owner;
        this.street = street;
        this.district = district;
        this.number = number;
        this.info = info;
        this.price = price;
        this.imgURL = imgURL;
    }

    public long getId() {
        return id;
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

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        House house = (House) o;
        return id == house.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
