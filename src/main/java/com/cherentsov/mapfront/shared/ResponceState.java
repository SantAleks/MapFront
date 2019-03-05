package com.cherentsov.mapfront.shared;

import java.util.List;
//Сущность, используемая для хранения ответа от вэб-приложения к GWT
public class ResponceState {
    private String[] banks;
    private String[] citys;
    private String[] countrys;
    private List<PointEntity> points;

    public ResponceState() {
    }
    public ResponceState(String[] countrys, String[] citys, String[] banks, List<PointEntity> points) {
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

    public List<PointEntity> getPoints() {
        return points;
    }

    public void setPoints(List<PointEntity> points) {
        this.points = points;
    }
}
