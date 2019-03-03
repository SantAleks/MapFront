package com.cherentsov.mapfront.client;

import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;
import javax.ws.rs.*;

public interface GwtServiceIntf extends RestService {

    @PUT
    @Path("gwtAppService")
    public void gwtCallServer(final UIContent data, MethodCallback<ResponceState> callback) throws IllegalArgumentException;

}
