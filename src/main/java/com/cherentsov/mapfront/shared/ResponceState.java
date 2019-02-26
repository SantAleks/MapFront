package com.cherentsov.mapfront.shared;

import java.util.ArrayList;
import java.util.List;

public class ResponceState {
    private String[] banks;
    private String[] citys;
    private String[] countrys;
    private List<String[]> points;

    public ResponceState() {
    }
    public ResponceState(String[] countrys, String[] citys, String[] banks, List<String[]> points) {
        this.countrys = countrys;
        this.citys = citys;
        this.banks = banks;
        this.points = points;
    }

    public String[] getCountrys() {
        return countrys;
    }

    public void setCountrys(String[] countrys) {
        this.countrys = countrys;
    }

    public String[] getCitys() {
        return citys;
    }

    public void setCitys(String[] citys) {
        this.citys = citys;
    }

    public String[] getBanks() {
        return banks;
    }

    public void setBanks(String[] banks) {
        this.banks = banks;
    }

    public List<String[]> getPoints() {
        return points;
    }

    public void setPoints(List<String[]> points) {
        this.points = points;
    }
}