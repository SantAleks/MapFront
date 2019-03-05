package com.cherentsov.mapfront.shared;

import org.junit.Test;

import static org.junit.Assert.*;

public class UIContentTest {
    @Test
    public void main() {
        // проверка конструктора и гетеров
        UIContent uiContent = new UIContent("country1","city1","bank1");
        assertEquals(uiContent.getCountry(), "country1");
        assertEquals(uiContent.getCity(), "city1");
        assertEquals(uiContent.getBank(), "bank1");

        //проверка сетеров
        UIContent uiContent2 = new UIContent();
        uiContent2.setCountry("country1");
        uiContent2.setCity("city1");
        uiContent2.setBank("bank1");

        //проверка икуалса
        assertEquals(uiContent, uiContent2);
        assertEquals(uiContent.hashCode(), uiContent2.hashCode());
        uiContent2.setCity("city2");
        assertFalse(uiContent.equals(uiContent2));
        assertFalse(uiContent.equals(null));

    }
}