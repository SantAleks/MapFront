package com.cherentsov.mapfront.client;

import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.List;

public class UIPanel extends Composite {

    @UiField
    HorizontalPanel topHorizontalPanel;
    @UiField
    VerticalPanel srchVerticalPanel;
    @UiField
    TextBox mapTextBox;
    @UiField
    Label web;
    @UiField
    Button wButton;
    @UiField
    SuggestBox sbCountry;
    @UiField
    SuggestBox sbCity;
    @UiField
    SuggestBox sbBank;
    @UiField
    Grid gPoint;

    private final GwtServiceIntf gwtAppService = GWT.create(GwtServiceIntf.class);

    private ResponceState responceState;
    private UIContent uIContent = new UIContent("","","");

    interface UIPanelUiBinder extends UiBinder<HTMLPanel, UIPanel> {
    }

    private static UIPanelUiBinder ourUiBinder = GWT.create(UIPanelUiBinder.class);

    public UIPanel() {
        initWidget(ourUiBinder.createAndBindUi(this));

        web.setText("dfgfdgfgdffd");
        mapTextBox.getElement().setAttribute("placeholder", "Add a todo item");

        sbCountry.addKeyUpHandler(event -> {
            if (uIContent.getCountry() != sbCountry.getValue()){
                uIContent.setCountry(sbCountry.getValue());
                //Window.alert("contry");
                sendInfoToServer("Country");
            }
        });

        sbCity.addKeyUpHandler(event -> {
            if (uIContent.getCity() != sbCity.getValue()){
                uIContent.setCity(sbCity.getValue());
                sendInfoToServer("City");
            }
        });

        sbBank.addKeyUpHandler(event -> {
            if (uIContent.getBank() != sbBank.getValue()){
                uIContent.setBank(sbBank.getValue());
                sendInfoToServer("Bank");
            }
        });

        wButton.addClickHandler(event -> {
            web.setText("!!!!!!!!!!!!!");
        });

    }

    private void sendInfoToServer(final String uiActor) {


        //UIContent uicRequest = new UIContent("Казахст", "ово","ВТБ");
        UIContent uicRequest = new UIContent(sbCountry.getValue(), sbCity.getValue(),sbBank.getValue());


        gwtAppService.gwtCallServer(uicRequest, new MethodCallback<ResponceState>() {
            @Override
            public void onFailure(final Method method, final Throwable exception) {
                Window.alert("Error");
                /*
                dialogBox.setText("Remote Procedure Call - Failure");
                serverResponseHtml.addStyleName("serverResponseLabelError");
                //serverResponseHtml.setHTML("ERROR ON SERVER");
                serverResponseHtml.setHTML(" " + method.getResponse().getStatusCode() + " ____ "+ method.getResponse().getHeadersAsString() + " ____ " + method.getResponse().getText());

                dialogBox.center();
                closeButton.setFocus(true);*/
            }

            @Override
            public void onSuccess(final Method method, final ResponceState result) {
                responceState = result;
                if (uiActor == "Country"){
                    MultiWordSuggestOracle oracle = (MultiWordSuggestOracle)sbCountry.getSuggestOracle();
                    oracle.clear();
                    for (String i : responceState.getCountrys()){
                        oracle.add(i);
                        //Window.alert("i: " + i+ " dsff " + oracle.toString());
                    }
                    sbCountry.refreshSuggestionList();
                    sbCountry.showSuggestionList();
                    //Window.alert("sbCountry.getValue: " +sbCountry.getValue());
                }
                else if (uiActor == "City"){
                    MultiWordSuggestOracle oracle = (MultiWordSuggestOracle)sbCity.getSuggestOracle();
                    oracle.clear();
                    for (String i : responceState.getCitys()){
                        oracle.add(i);
                    }
                    sbCity.refreshSuggestionList();
                    sbCity.showSuggestionList();
                }
                else if (uiActor == "Bank"){
                    MultiWordSuggestOracle oracle = (MultiWordSuggestOracle)sbBank.getSuggestOracle();
                    oracle.clear();
                    for (String i : responceState.getBanks()){
                        oracle.add(i);
                    }
                    sbBank.refreshSuggestionList();
                    sbBank.showSuggestionList();
                }
                gPoint.clear();
                if (responceState.getPoints().size()>0){
                    gPoint.resize(responceState.getPoints().size()+1, 4);
                    gPoint.setText(0, 0 , "Адрес ");
                    gPoint.setText(0, 1 , "Страна");
                    gPoint.setText(0, 2 , "Город");
                    gPoint.setText(0, 3 , "Банк");
                    gPoint.setText(0, 0 , "11111");
                    for (int i1 = 0; i1 < responceState.getPoints().size(); i1++){
                        gPoint.setText(0, 0 , "33333");
                        List<String[]> eee = responceState.getPoints();
                        gPoint.setText(0, 1 , "4444");
                        String[] sTemp = eee.get(i1);
                        gPoint.setText(0, 2 , "5555");
                        gPoint.setText(i1+1, 0 , "gfhfg");
                        gPoint.setText(i1+1, 1 , sTemp[1]);
                        gPoint.setText(i1+1, 2 , sTemp[2]);
                        gPoint.setText(i1+1, 3 , sTemp[3]);
                    }
                    gPoint.setText(2, 3 , "54654");
                }
            /*
                dialogBox.setText("Remote Procedure Call");
                serverResponseHtml.removeStyleName("serverResponseLabelError");
                serverResponseHtml.setHTML(result.getBanks()[0]);
                dialogBox.center();
                closeButton.setFocus(true);
            */
            }
        });
    }
}