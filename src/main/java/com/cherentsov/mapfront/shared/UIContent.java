package com.cherentsov.mapfront.shared;

public class UIContent {
    private String country;
    private String city;
    private String bank;

    public UIContent() {
    }
    public UIContent(String country, String city, String bank) {
        this.country = country;
        this.city = city;
        this.bank = bank;
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

}
