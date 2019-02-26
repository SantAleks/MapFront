package com.cherentsov.mapfront.client;

import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.*;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.*;
//import ru.javastudy.gwtApp.shared.FieldValidator;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

/** Entry point classes define <code>onModuleLoad()</code>. */
public class GTWClient implements EntryPoint {

    final Button confirmButton = new Button("Confirm");
    final TextBox nameField = new TextBox();
    final Label errorLabel = new Label();
    final Label helloLabel = new Label();

    VerticalPanel dialogVPanel = new VerticalPanel();
    final DialogBox dialogBox = new DialogBox();
    final HTML serverResponseHtml = new HTML();
    final Label sendToServerLabel = new Label();
    final Button closeButton = new Button("Close");

    //private final GwtServiceIntf gwtAppService = GWT.create(GwtServiceIntf.class);

    /** This is the entry point method.*/
    public void onModuleLoad() {
        RootPanel.get().add(new UIPanel());
        //Window.alert("Hello, AJAX");

/*
        helloLabel.setText("GwtApp Application hello world");

        final Label usernameLabel = new Label();
        usernameLabel.setText("Username: ");
        /*Связываем id='' на html странице с компонентами */
/*        RootPanel.get("helloId").add(helloLabel);

        RootPanel.get("usernameLabelId").add(usernameLabel);
        RootPanel.get("usernameId").add(nameField);

        RootPanel.get("confirmButtonId").add(confirmButton);
        RootPanel.get("errorLabelContainer").add(errorLabel);

        // Create the popup dialog box
        dialogBox.setText("Remote procedure call from server");
        dialogBox.setAnimationEnabled(true);

        closeButton.getElement().setId("closeButtonId");

        dialogVPanel.addStyleName("dialogVPanel");
        dialogVPanel.add(new HTML("<b>Отправленные поля на сервер:</b>"));
        dialogVPanel.add(sendToServerLabel);
        dialogVPanel.add(new HTML("<br><b>Ответ сервера:</b>"));
        dialogVPanel.add(serverResponseHtml);
        dialogVPanel.setHorizontalAlignment(VerticalPanel.ALIGN_RIGHT);
        dialogVPanel.add(closeButton);
        dialogBox.setWidget(dialogVPanel);

        //обработчик для клика по кнопке 'Confirm'
        confirmButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                confirmButton.setEnabled(false);
                sendInfoToServer();
            }
        });

        //обработчик по нажатию enter в текстовом поле
        nameField.addKeyUpHandler(new KeyUpHandler() {
            public void onKeyUp(KeyUpEvent event) {
                if(event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
                    sendInfoToServer();
                }
            }
        });
        //обработчик по клику на кнопку 'Close' в диалоговом окне
        closeButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                dialogBox.hide();
                confirmButton.setEnabled(true);
                confirmButton.setFocus(true);
            }
        });
*/
    }

/*
    private void sendInfoToServer() {
        //validate input text
        errorLabel.setText("");
        String nameToServer = nameField.getText();
        sendToServerLabel.setText(nameToServer);
        confirmButton.setEnabled(false);
        serverResponseHtml.setText("");
        UIContent uicRequest = new UIContent("Казахст", "ово","ВТБ");

        gwtAppService.gwtCallServer(uicRequest, new MethodCallback<ResponceState>() {
            @Override
            public void onFailure(final Method method, final Throwable exception) {
                dialogBox.setText("Remote Procedure Call - Failure");
                serverResponseHtml.addStyleName("serverResponseLabelError");
                //serverResponseHtml.setHTML("ERROR ON SERVER");
                serverResponseHtml.setHTML(" " + method.getResponse().getStatusCode() + " ____ "+ method.getResponse().getHeadersAsString() + " ____ " + method.getResponse().getText());

                dialogBox.center();
                closeButton.setFocus(true);
            }

            @Override
            public void onSuccess(final Method method, final ResponceState result) {
                dialogBox.setText("Remote Procedure Call");
                serverResponseHtml.removeStyleName("serverResponseLabelError");
                serverResponseHtml.setHTML(result.getBanks()[0]);
                dialogBox.center();
                closeButton.setFocus(true);
            }
        });
    }*/

}
