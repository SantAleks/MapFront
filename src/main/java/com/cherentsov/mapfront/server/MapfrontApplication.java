package com.cherentsov.mapfront.server;

import com.google.gson.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;

//spring.main.web-application-type=none
@SpringBootApplication

public class MapfrontApplication {

    public static void main(String[] args) {
        SpringApplication.run(MapfrontApplication.class, args);
        System.out.println("_________Start________");
        /*
        final String uri1 = "http://127.0.0.1:8090/map?co=&ci=&ba=ВТБ&fc=co";
        final String uri2 = "http://127.0.0.1:8090/map?co=Казахст&ci=ово&ba=ВТБ&fc=co";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri1, String.class);

        System.out.println(result);

        Gson gson = new Gson();
        ArrayList arJson = (ArrayList)gson.fromJson(result, ArrayList.class);
        System.out.println(arJson);

        Object[] arTemp = arJson.toArray();
        System.out.println(arTemp.length);
        ArrayList countrys = (ArrayList)arTemp[0];
        ArrayList cities = (ArrayList)arTemp[1];
        ArrayList banks = (ArrayList)arTemp[2];
        ArrayList points = (ArrayList)arTemp[3];
        String[][] mPoint = new String[points.size()][6];
        for (int i = 0; i< points.size(); i++){
            ArrayList pt = (ArrayList) points.get(i);
            mPoint[i][0] = (String)pt.get(0);
            mPoint[i][1] = (String)pt.get(1);
            mPoint[i][2] = (String)pt.get(2);
            mPoint[i][3] = (String)pt.get(3);
            mPoint[i][4] = (String)pt.get(4);
            mPoint[i][5] = (String)pt.get(5);
        }

        System.out.println("countrys "+countrys.size() + " " + countrys);
        System.out.println("cities "+cities.size() + " " + cities);
        System.out.println("banks "+banks.size() + " " + banks);
        System.out.println("mPoint "+mPoint.length + ":___ ");
        for (String[] i: mPoint
             ) {
            for (String r:i
                 ) {
                System.out.print(r+" ");
            }
            System.out.println(" ");
        }


        System.out.println(result);
        */
    }

}

