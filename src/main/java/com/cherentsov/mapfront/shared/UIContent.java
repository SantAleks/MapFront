package com.cherentsov.mapfront.shared;

import java.util.Objects;

//Сущность для передачи данных о заполненных полях в пользовательском интерфейсе от GWT к WEB приложению.
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UIContent uiContent = (UIContent) o;
        return country.equals(uiContent.country) &&
                city.equals(uiContent.city) &&
                bank.equals(uiContent.bank);
    }

    @Override
    public int hashCode() {
        return Objects.hash(country, city, bank);
    }
}
