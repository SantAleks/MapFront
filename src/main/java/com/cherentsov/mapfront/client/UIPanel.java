package com.cherentsov.mapfront.client;

import com.cherentsov.mapfront.shared.PointEntity;
import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.resources.client.CssResource;
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
    VerticalPanel srchVerticalPanelPoint;
    /*
    @UiField
    TextBox mapTextBox;
    @UiField
    Label web;
    @UiField
    Button wButton;
    */
    @UiField
    SuggestBox sbCountry;
    @UiField
    SuggestBox sbCity;
    @UiField
    SuggestBox sbBank;
    @UiField
    Grid gPoint;
    @UiField MyStyle style;
    @UiField
    HTMLPanel mapPanel;

    private int selectIndexGrid = -1;

    private final GwtServiceIntf gwtAppService = GWT.create(GwtServiceIntf.class);

    private ResponceState responceState;
    private UIContent uIContent = new UIContent("","","");

    interface UIPanelUiBinder extends UiBinder<HTMLPanel, UIPanel> {
    }

    interface MyStyle extends CssResource {
        //String enabled();
        //String disabled();

        String pretty();

        String third();

        String suggestBox();

        String grid();

        @ClassName("tableCell-even")
        String tableCellEven();

        String label();

        @ClassName("tableCell-odd")
        String tableCellOdd();

        String panel();

        String second();

        @ClassName("tableCell-cap")
        String tableCellCap();

        @ClassName("tableCell-select")
        String tableCellSelect();
    }

    private static UIPanelUiBinder ourUiBinder = GWT.create(UIPanelUiBinder.class);

    public UIPanel() {
        initWidget(ourUiBinder.createAndBindUi(this));
        topHorizontalPanel.setCellWidth(srchVerticalPanel,"150px");
        topHorizontalPanel.setCellWidth(srchVerticalPanelPoint,"100%");
        topHorizontalPanel.setCellWidth(mapPanel,"600px");

        MapInit();
        //web.setText("dfgfdgfgdffd");
        //mapTextBox.getElement().setAttribute("placeholder", "Add a todo item");

        sbCountry.addKeyUpHandler(event -> {
            if (uIContent.getCountry() != sbCountry.getValue()){
                uIContent.setCountry(sbCountry.getValue());
                //Window.alert("contry");
                sendInfoToServer("Country");
            }
        });

        sbCountry.addSelectionHandler(event -> {
            if (uIContent.getCountry() != sbCountry.getValue()){
                uIContent.setCountry(sbCountry.getValue());
                sendInfoToServer("Country");
            }
        });

        sbCity.addKeyUpHandler(event -> {
            if (uIContent.getCity() != sbCity.getValue()){
                uIContent.setCity(sbCity.getValue());
                sendInfoToServer("City");
            }
        });
        sbCity.addSelectionHandler(event -> {
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

        sbBank.addSelectionHandler(event -> {
            if (uIContent.getBank() != sbBank.getValue()){
                uIContent.setBank(sbBank.getValue());
                sendInfoToServer("Bank");
            }
        });



        gPoint.addClickHandler(event -> {
            allert("dsfdsfsd");
            selectIndexGrid = gPoint.getCellForEvent(event).getRowIndex();
            drawGrid();

            //gPoint.getCellForEvent(event);
            //Window.alert("getX: " + event.getX() + " getClientX: " + gPoint.getCellForEvent(event).getRowIndex());

        });

        //wButton.addClickHandler(event -> {
        //    web.setText("!!!!!!!!!!!!!");
        //});

    }
    public static native void MapInit() /*-{
        //$wnd.alert(msg);
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        //var
        ymaps = $wnd.ymaps;
        ymaps.ready(init);
        function init(){
            // Создание карты.
            myMap = new ymaps.Map("yandexMap", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.76, 37.64],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 7
            });
        }

    }-*/;

    public static native void allert(String msg) /*-{
        //myMap.setCenter([50.76, 31.64]);
        myMap.panTo([50.76, 31.64], {
            // Задержка между перемещениями.
            delay: 1500
        });

        //$wnd.alert(msg);
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        //var ymaps = $wnd.ymaps;
        //ymaps.ready(init);
        //function init(){
            // Создание карты.
         //   var myMap = new ymaps.Map("yandexMap", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
         //       center: [55.76, 37.64],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
          //      zoom: 7
          //  });
        //}

    }-*/;

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
                    if ((responceState.getCountrys().length > 1) ||
                            (responceState.getCountrys().length == 1 & (responceState.getCountrys())[0] != uIContent.getCountry())) {
                        sbCountry.showSuggestionList();
                    }
                    //Window.alert("sbCountry.getValue: " +sbCountry.getValue());
                }
                else if (uiActor == "City"){
                    MultiWordSuggestOracle oracle = (MultiWordSuggestOracle)sbCity.getSuggestOracle();
                    oracle.clear();
                    for (String i : responceState.getCitys()){
                        oracle.add(i);
                    }
                    sbCity.refreshSuggestionList();
                    if ((responceState.getCitys().length > 1) ||
                            (responceState.getCitys().length == 1 & (responceState.getCitys())[0] != uIContent.getCity())) {
                        sbCity.showSuggestionList();
                    }
                }
                else if (uiActor == "Bank"){
                    MultiWordSuggestOracle oracle = (MultiWordSuggestOracle)sbBank.getSuggestOracle();
                    oracle.clear();
                    for (String i : responceState.getBanks()){
                        oracle.add(i);
                    }
                    sbBank.refreshSuggestionList();
                    if ((responceState.getBanks().length > 1) ||
                            (responceState.getBanks().length == 1 & (responceState.getBanks())[0] != uIContent.getBank())) {
                        sbBank.showSuggestionList();
                    }
                }
                selectIndexGrid = -1;
                drawGrid();

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

    private void drawGrid(){
        gPoint.clear();
        if (responceState.getPoints().size()>0){
            gPoint.resize(responceState.getPoints().size()+1, 4);
            gPoint.setText(0, 0 , "Адрес ");
            gPoint.setText(0, 1 , "Страна");
            gPoint.setText(0, 2 , "Город");
            gPoint.setText(0, 3 , "Банк");
            gPoint.getRowFormatter().setStyleName(0,style.tableCellCap());
            for (int i = 0; i < responceState.getPoints().size(); i++){
                PointEntity pointEntity = responceState.getPoints().get(i);
                gPoint.setText(i+1, 0 , pointEntity.getAddress());
                gPoint.setText(i+1, 1 , pointEntity.getCountry());
                gPoint.setText(i+1, 2 , pointEntity.getCity());
                gPoint.setText(i+1, 3 , pointEntity.getBank());
                if ((i % 2) == 0) {
                    gPoint.getRowFormatter().setStyleName(i+1,style.tableCellEven());
                } else {
                    gPoint.getRowFormatter().setStyleName(i+1,  style.tableCellOdd());
                }

                if (i+1 == selectIndexGrid) {
                    gPoint.getRowFormatter().addStyleName(i+1,style.tableCellSelect());
                    //gPoint.getRowFormatter().setStylePrimaryName(i+1, style.tableCellSelect());
                    //gPoint.getRowFormatter().setStyleName(i+1,style.tableCellSelect());
                }
            }
        }
        else {
            gPoint.resize(0,0);
        }
    }
}

