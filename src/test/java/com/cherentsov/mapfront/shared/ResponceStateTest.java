package com.cherentsov.mapfront.shared;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class ResponceStateTest {

    @Test
    public void main() {
        // проверка конструктора и гетеров
        String[] countrys = {"country1","country2"};
        String[] citys = {"city1","city2"};
        String[] banks = {"bank1","bank2"};
        PointEntity pointEntity1 = new PointEntity("address1","country1","city1",
                "bank1", "11.11", "22.22");
        PointEntity pointEntity2 = new PointEntity("address2","country2","city2",
                "bank2", "33.33", "44.44");
        List<PointEntity> points = new ArrayList<PointEntity>();
        points.add(pointEntity1);
        points.add(pointEntity2);

        ResponceState responceState = new ResponceState(countrys, citys, banks, points);
        assertArrayEquals(responceState.getCountrys(), countrys);
        assertArrayEquals(responceState.getCitys(), citys);
        assertArrayEquals(responceState.getBanks(), banks);
        assertEquals(responceState.getPoints(), points);

        //проверка сетеров
        ResponceState responceState2 = new ResponceState();
        responceState2.setCountrys(countrys);
        responceState2.setCitys(citys);
        responceState2.setBanks(banks);
        responceState2.setPoints(points);

        assertArrayEquals(responceState2.getCountrys(), countrys);
        assertArrayEquals(responceState2.getCitys(), citys);
        assertArrayEquals(responceState2.getBanks(), banks);
        assertEquals(responceState2.getPoints(), points);
    }
}