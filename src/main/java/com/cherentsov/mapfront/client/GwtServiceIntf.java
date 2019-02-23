package com.cherentsov.mapfront.client;


import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
import com.google.gwt.editor.client.Editor;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;
import javax.ws.rs.*;
import java.util.List;
import java.util.Set;

/*
@RemoteServiceRelativePath("gwtAppService")
public interface GwtServiceIntf extends RemoteService {
    String gwtCallServer(String data) throws IllegalArgumentException;
}
*/
public interface GwtServiceIntf extends RestService {

    //@GET
    @PUT
    //@Path("gwtAppService?text={data}")
    @Path("gwtAppService")
    //public void gwtCallServer(@PathParam("data") UIContent data, MethodCallback<String> callback) throws IllegalArgumentException;
    public void gwtCallServer(final UIContent data, MethodCallback<ResponceState> callback) throws IllegalArgumentException;

}
