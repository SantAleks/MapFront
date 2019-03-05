package com.cherentsov.mapfront.server;

import com.cherentsov.mapfront.shared.*;
import com.google.gson.Gson;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertArrayEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(locations = "classpath:application.properties")

public class GwtAppServiceImplTest {
    @Mock
    RestTemplate restTemplate;
    @Before
    public void setUp() {
        ReflectionTestUtils.setField(gwtAppServiceImpl, "port", "8090");
        ReflectionTestUtils.setField(gwtAppServiceImpl, "ip", "127.0.0.1");
    }
    @InjectMocks
    private GwtAppServiceImpl gwtAppServiceImpl = new GwtAppServiceImpl();

    @Test
    public void getTodoItems() {
        UIContent uiContent = new UIContent("country1","city1","bank1");
        //System.out.println(gwtAppServiceImpl.getIp());

        Set<Object> mockSetResult = new LinkedHashSet<Object>();
        mockSetResult.add(new String[] {"country1"});
        mockSetResult.add(new String[] {"city1"});
        mockSetResult.add(new String[] {"bank1"});
        mockSetResult.add(new String[][] {{"1","2","3","4","5","6"}});
        Gson gson = new Gson();
        String mockJsonResult = gson.toJson(mockSetResult);

        //проверка формирования правильной строки запроса к бэкенд
        when(restTemplate.getForObject("http://127.0.0.1:8090/map?co=country1&ci=city1&ba=bank1&fc=co", String.class)).thenReturn(mockJsonResult);
        ResponseEntity<ResponceState> responseEntity = gwtAppServiceImpl.getTodoItems(uiContent);
        verify(restTemplate).getForObject("http://127.0.0.1:8090/map?co=country1&ci=city1&ba=bank1&fc=co", String.class);

        //проверка формирования ответа
        assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
        assertArrayEquals(responseEntity.getBody().getCountrys(), new String[] {"country1"});
        assertArrayEquals(responseEntity.getBody().getCitys(), new String[] {"city1"});
        assertArrayEquals(responseEntity.getBody().getBanks(), new String[] {"bank1"});
        ArrayList<PointEntity> point = new ArrayList<>();
        point.add(new PointEntity("1","2","3","4","5","6"));
        assertEquals(responseEntity.getBody().getPoints(), point);
    }
}