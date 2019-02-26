package com.cherentsov.mapfront.server;

import com.cherentsov.mapfront.client.GwtServiceIntf;
import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
import com.google.gson.Gson;
import com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.server.rpc.RPC;
import com.google.gwt.user.server.rpc.RPCRequest;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Produces;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.springframework.web.bind.annotation.RequestMethod.*;

//@Controller
@RestController

//public class GwtAppServiceImpl extends RemoteServiceServlet implements GwtServiceIntf {

public class GwtAppServiceImpl {
    //@ResponseBody
    //@RequestMapping(value = "/gwtApp/gwtAppService", method = GET, produces = "text/plain", consumes="application/json")
    @RequestMapping(value = "/gwtApp/gwtAppService", method = PUT)
    public ResponseEntity<ResponceState> getTodoItems(@RequestBody final UIContent containingText) {
    //public ResponseEntity<String> getTodoItems(@RequestParam(value = "text", required = false) String containingText) {
        //containingText = (UIContent) containingText;
        System.out.println("Входной запрос: " + containingText);
        //UIContent tempContent = UIContent.valueOf(containingText);
        //final String uri1 = "http://127.0.0.1:8090/map?co=&ci=&ba=ВТБ&fc=co";
        //final String uri2 = "http://127.0.0.1:8090/map?co=Казахст&ci=ово&ba=ВТБ&fc=co";
        String uri = "http://127.0.0.1:8090/map?co=" + containingText.getCountry() + "&ci=" + containingText.getCity() +
                "&ba=" + containingText.getBank()+ "&fc=co";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);

        System.out.println("Результат запроса к бэкэнду: " + result);

        Gson gson = new Gson();
        ArrayList arJson = (ArrayList)gson.fromJson(result, ArrayList.class);
        System.out.println("Распаковка Json: " + arJson);

        Object[] arTemp = arJson.toArray();
        System.out.println("arTemp.length: " + arTemp.length);
        ArrayList<String> countrys = (ArrayList)arTemp[0];
        String[] saCountrys = countrys.toArray(new String[countrys.size()]);;

        ArrayList<String> cities = (ArrayList)arTemp[1];
        String[] saCities = cities.toArray(new String[cities.size()]);;

        ArrayList<String> banks = (ArrayList)arTemp[2];
        String[] saBanks = banks.toArray(new String[banks.size()]);;

        ArrayList points = (ArrayList)arTemp[3];
        /*String[][] mPoint = new String[points.size()][6];
        for (int i = 0; i< points.size(); i++){
            ArrayList pt = (ArrayList) points.get(i);
            mPoint[i][0] = (String)pt.get(0);
            mPoint[i][1] = (String)pt.get(1);
            mPoint[i][2] = (String)pt.get(2);
            mPoint[i][3] = (String)pt.get(3);
            mPoint[i][4] = (String)pt.get(4);
            mPoint[i][5] = (String)pt.get(5);
        }
        ArrayList<String[]> alPoints = new ArrayList(Arrays.asList(mPoint));
*/
        ArrayList<String[]> alPoints = new ArrayList();
        for (int i = 0; i< points.size(); i++){
            ArrayList pt = (ArrayList) points.get(i);
            String[] mPoint = new String[6];
            mPoint[0] = (String)pt.get(0);
            mPoint[1] = (String)pt.get(1);
            mPoint[2] = (String)pt.get(2);
            mPoint[3] = (String)pt.get(3);
            mPoint[4] = (String)pt.get(4);
            mPoint[5] = (String)pt.get(5);
            alPoints.add(mPoint);
        }

        System.out.println("countrys "+countrys.size() + " " + countrys);
        System.out.println("cities "+cities.size() + " " + cities);
        System.out.println("banks "+banks.size() + " " + banks);
        /*System.out.println("mPoint "+mPoint.length + ":___ ");
        for (String[] i: mPoint
        ) {
            for (String r:i
            ) {
                System.out.print(r+" ");
            }
            System.out.println(" ");
        }*/
        System.out.println("alPoints "+alPoints.size() + ":___ ");
        for (String[] i: alPoints
        ) {
            for (String r:i
            ) {
                System.out.print(r+" ");
            }
            System.out.println(" ");
        }

        ResponceState responceState = new ResponceState(saCountrys, saCities, saBanks, alPoints);


        /*return ResponseEntity.ok()
               // .cacheControl(CacheControl.noCache()) // if we don't return this the browser could (edge does) cache the request
                .body("ffgfgfg");*/
        return new ResponseEntity<ResponceState>(responceState, HttpStatus.OK);

        //return new ResponseEntity<ResponceState>(new ResponceState(new String[]{"111","222"}, new String[]{"333","444"}) , HttpStatus.OK);
        //return new ResponseEntity<>(HttpStatus.OK);
    }
/*
    public String gwtCallServer(String data) throws IllegalArgumentException {
        if (data == null) {
            throw new IllegalArgumentException("message is null");
        }
        /*if (!FieldValidator.isValidData(data)) {
            throw new IllegalArgumentException("Имя должно быть больше трех символов");
        }*/
        //String serverInfo = getServletContext().getServerInfo();
        //String userAgent = getThreadLocalRequest().getHeader("User-Agent");
        //String userAgent = getThreadLocalRequest().getHeader("User-Agent");

        //data = escapeHtml(data);
        //userAgent = escapeHtml(userAgent);

        //return "Привет, " + data + "!<br> Инфо сервера: " + serverInfo + ".<br> Вы используете:" +
        //        "<br>" + userAgent;


/*
        System.out.println(data);
        return "fdgfd";
    }

    private String escapeHtml(String html) {
        if (html == null) {
            return null;
        }
        return html.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(
                ">", "&gt;");
    }

*/
}
