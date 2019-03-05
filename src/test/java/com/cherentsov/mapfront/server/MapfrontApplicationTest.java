package com.cherentsov.mapfront.server;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;


//@ActiveProfiles("local")
@TestPropertySource(locations = "classpath:application.properties")
//@SpringBootTest(classes=com.cherentsov.mapfront.server.MapfrontApplication.class)
@RunWith(SpringRunner.class)
@SpringBootTest
public class MapfrontApplicationTest {

    @Autowired
    GwtAppServiceImpl gwtAppServiceImpl;

    @Test
    public void testConfigMapfrontApplication(){
        assertEquals("127.0.0.1", gwtAppServiceImpl.getIp());
        assertEquals("8090", gwtAppServiceImpl.getPort());

    }
}