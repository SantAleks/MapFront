package com.cherentsov.mapfront.server;

import com.cherentsov.mapfront.shared.*;
import com.google.gson.Gson;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@PropertySource("classpath:application.properties")
public class GwtAppServiceImpl {
    private String port;
    private String ip;
    private static final Log logger = LogFactory.getLog(GwtAppServiceImpl.class);

    @Bean
    public RestTemplate restTemplateBean() {
        return new RestTemplate();
    }

    @Autowired
    RestTemplate restTemplate;
    @Autowired
    public void setPort(@Value("${backend.port}")String port) {
        this.port = port;
    }
    @Autowired
    public void setIp(@Value("${backend.ip}")String ip) {
        this.ip = ip;
    }

    public String getPort() {
        return port;
    }

    public String getIp() {
        return ip;
    }

    @RequestMapping(value = "/gwtApp/gwtAppService", method = PUT)
    public ResponseEntity<ResponceState> getTodoItems(@RequestBody final UIContent containingText) {
        logger.debug("Входной запрос: " + containingText);

        //Чистим входные данные от возможных инъекций и формируем запрос к Бэкэнду
        StringBuilder uri = new StringBuilder("http://");
        uri.append(ip).append(":").append(port).append("/map?co=");
        uri.append(containingText.getCountry().replaceAll("\\p{P}|\\p{S}", "")).append("&ci=");
        uri.append(containingText.getCity().replaceAll("\\p{P}|\\p{S}", "")).append("&ba=");
        uri.append(containingText.getBank().replaceAll("\\p{P}|\\p{S}", "")).append("&fc=co");

        //RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri.toString(), String.class);
        logger.debug("Результат запроса к бэкэнду: " + result);

        Gson gson = new Gson();
        ArrayList arJson = (ArrayList)gson.fromJson(result, ArrayList.class);
        logger.debug("Распаковка Json: " + arJson);

        Object[] arTemp = arJson.toArray();
        logger.debug("Количество сущностей в ответе от бэкенда: " + arTemp.length);

        ArrayList<String> countrys = (ArrayList)arTemp[0];
        String[] saCountrys = countrys.toArray(new String[countrys.size()]);;

        ArrayList<String> cities = (ArrayList)arTemp[1];
        String[] saCities = cities.toArray(new String[cities.size()]);;

        ArrayList<String> banks = (ArrayList)arTemp[2];
        String[] saBanks = banks.toArray(new String[banks.size()]);;

        ArrayList points = (ArrayList)arTemp[3];

        ArrayList<PointEntity> alPoints = new ArrayList();
        for (int i = 0; i< points.size(); i++){
            ArrayList pt = (ArrayList) points.get(i);
            PointEntity mPoint = new PointEntity((String)pt.get(0), (String)pt.get(1), (String)pt.get(2), (String)pt.get(3),
                    (String)pt.get(4),(String)pt.get(5));
            alPoints.add(mPoint);
        }

        logger.debug("countrys "+countrys.size() + " " + countrys);
        logger.debug("cities "+cities.size() + " " + cities);
        logger.debug("banks "+banks.size() + " " + banks);
        logger.debug("alPoints "+alPoints.size() + ": ");

        for (PointEntity i: alPoints) {
            logger.debug(i.toString());
        }

        ResponceState responceState = new ResponceState(saCountrys, saCities, saBanks, alPoints);
        return new ResponseEntity<ResponceState>(responceState, HttpStatus.OK);
    }
}
