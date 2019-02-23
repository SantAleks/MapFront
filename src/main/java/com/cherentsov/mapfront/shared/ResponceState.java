package com.cherentsov.mapfront.shared;

public class ResponceState {
    private String[] bank;
    private String[] city;

    public ResponceState() {
    }
    public ResponceState(String[] bank, String[] city) {
        this.bank = bank;
        this.city = city;
    }

    public String[] getBank() {
        return bank;
    }

    public void setBank(String[] bank) {
        this.bank = bank;
    }

    public String[] getCity() {
        return city;
    }

    public void setCity(String[] city) {
        this.city = city;
    }
}
