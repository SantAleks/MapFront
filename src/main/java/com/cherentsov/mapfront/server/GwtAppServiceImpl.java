package com.cherentsov.mapfront.server;

import com.cherentsov.mapfront.client.GwtServiceIntf;
import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
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
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Produces;
import java.lang.annotation.Annotation;
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
        //UIContent tempContent = UIContent.valueOf(containingText);
        System.out.println(containingText);
        /*return ResponseEntity.ok()
               // .cacheControl(CacheControl.noCache()) // if we don't return this the browser could (edge does) cache the request
                .body("ffgfgfg");*/
        return new ResponseEntity<ResponceState>(new ResponceState(new String[]{"111","222"}, new String[]{"333","444"}) , HttpStatus.OK);
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
