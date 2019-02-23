package com.cherentsov.mapfront.shared;

public class UIContent {
    private String bank;
    private String city;

    public UIContent() {
    }
    public UIContent(String bank, String city) {
        this.bank = bank;
        this.city = city;
    }

    /*public static UIContent valueOf(String stIn){
        String[] tempIn = stIn.split("\\|");
        String bank = "";
        String city = "";
        if (tempIn.length > 0) {
            bank = tempIn[0];
        }
        if (tempIn.length > 1) {
            city = tempIn[1];
        }
        return new UIContent(bank, city);
    }*/

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
/*
    @Override
    public String toString() {
        /*return "UIContent{" +
                "Bank='" + Bank + '\'' +
                ", City='" + City + '\'' +
                '}';*/
  /*      return ""+ Bank+"|"+City;
    }*/
}
