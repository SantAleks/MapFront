package com.cherentsov.mapfront.shared;

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
}
