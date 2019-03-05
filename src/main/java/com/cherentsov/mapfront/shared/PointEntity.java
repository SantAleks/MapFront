package com.cherentsov.mapfront.shared;

import java.util.Objects;

//Сущность, для хранения информации об одном банковском пункте
public class PointEntity {
    private String address;
    private String country;
    private String city;
    private String bank;
    private String xCoor;
    private String yCoor;

    public PointEntity(){}



    public PointEntity(String address, String country, String city, String bank, String xCoor, String yCoor) {
        this.address = address;
        this.country = country;
        this.city = city;
        this.bank = bank;
        this.xCoor = xCoor;
        this.yCoor = yCoor;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getxCoor() {
        return xCoor;
    }

    public void setxCoor(String xCoor) {
        this.xCoor = xCoor;
    }

    public String getyCoor() {
        return yCoor;
    }

    public void setyCoor(String yCoor) {
        this.yCoor = yCoor;
    }

    @Override
    public String toString() {
        return "PointEntity{" +
                "address='" + address + '\'' +
                ", country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", bank='" + bank + '\'' +
                ", xCoor='" + xCoor + '\'' +
                ", yCoor='" + yCoor + '\'' +
                '}';
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PointEntity that = (PointEntity) o;
        return Objects.equals(address, that.address) &&
                Objects.equals(country, that.country) &&
                Objects.equals(city, that.city) &&
                Objects.equals(bank, that.bank) &&
                Objects.equals(xCoor, that.xCoor) &&
                Objects.equals(yCoor, that.yCoor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(address, country, city, bank, xCoor, yCoor);
    }
}
