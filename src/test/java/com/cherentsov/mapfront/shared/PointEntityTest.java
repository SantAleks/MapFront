package com.cherentsov.mapfront.shared;

import org.junit.Test;

import static org.junit.Assert.*;

public class PointEntityTest {
    @Test
    public void main() {
        // проверка конструктора и гетеров
        PointEntity pointEntity = new PointEntity("address1","country1","city1",
                "bank1", "11.11", "22.22");

        assertEquals(pointEntity.getAddress(), "address1");
        assertEquals(pointEntity.getCountry(), "country1");
        assertEquals(pointEntity.getCity(), "city1");
        assertEquals(pointEntity.getBank(), "bank1");
        assertEquals(pointEntity.getxCoor(), "11.11");
        assertEquals(pointEntity.getyCoor(), "22.22");

        PointEntity pointEntity2 = new PointEntity();
        assertEquals(pointEntity2.toString().getClass(), String.class);
        //проверка сетеров
        pointEntity2.setAddress("address1");
        pointEntity2.setCountry("country1");
        pointEntity2.setCity("city1");
        pointEntity2.setBank("bank1");
        pointEntity2.setxCoor("11.11");
        pointEntity2.setyCoor("22.22");

        //проверка икуалса и хеша - нет комромисам ради 100% покрытия
        assertEquals(pointEntity, pointEntity2);
        assertEquals(pointEntity.hashCode(), pointEntity2.hashCode());
        pointEntity.setCity("city2");
        assertFalse(pointEntity.equals(pointEntity2));
        assertFalse(pointEntity.equals(null));
    }
}