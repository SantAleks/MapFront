package com.cherentsov.mapfront.client;

import com.cherentsov.mapfront.shared.PointEntity;
import com.cherentsov.mapfront.shared.ResponceState;
import com.cherentsov.mapfront.shared.UIContent;
import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

public class UIPanel extends Composite {

    @UiField HorizontalPanel topHorizontalPanel;
    @UiField VerticalPanel srchVerticalPanel;
    @UiField VerticalPanel srchVerticalPanelPoint;
    @UiField SuggestBox sbCountry;
    @UiField SuggestBox sbCity;
    @UiField SuggestBox sbBank;
    @UiField Grid gPoint;
    @UiField MyStyle style;
    @UiField HTMLPanel mapPanel;

    private int selectIndexGrid = -1;
    private final GwtServiceIntf gwtAppService = GWT.create(GwtServiceIntf.class);
    private ResponceState responceState;
    private UIContent uIContent = new UIContent("","","");

    interface UIPanelUiBinder extends UiBinder<HTMLPanel, UIPanel> {
    }

    interface MyStyle extends CssResource {

        String suggestBox();

        @ClassName("tableCell-even")
        String tableCellEven();

        String label();

        @ClassName("tableCell-odd")
        String tableCellOdd();

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

        mapInit();

        sbCountry.addKeyUpHandler(event -> {
            if (uIContent.getCountry() != sbCountry.getValue()){
                uIContent.setCountry(sbCountry.getValue());
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
            selectIndexGrid = gPoint.getCellForEvent(event).getRowIndex();
            drawGrid();
            if (selectIndexGrid >=1){
                PointEntity selPoint =  responceState.getPoints().get(selectIndexGrid-1);
                centrMap(selPoint.getxCoor(), selPoint.getyCoor());
            }
        });
    }

    public static native void addPlacemark(String bank, String addr, String xCoor, String yCoor) /*-{
        MyGeoObjectCollection.add($wnd.makePlacemark(bank, addr, parseFloat(xCoor), parseFloat(yCoor)));
    }-*/;

    public static native void clearCollection() /*-{
        MyGeoObjectCollection.removeAll();
    }-*/;

    public static native void mapInit() /*-{
        //$wnd.alert(msg);
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps1 = $wnd.ymaps;
        ymaps1.ready(init);
        function init(){
            // Создание карты.
            myMap = new ymaps1.Map("yandexMap", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [54.8609, 83.084],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            });
            MyGeoObjectCollection = new ymaps1.GeoObjectCollection({}, {
                preset: 'islands#darkOrangeStretchyIcon'});
            myMap.geoObjects.add(MyGeoObjectCollection);
        }
    }-*/;

    public static native void centrMap(String xCoor, String yCoor) /*-{
        myMap.panTo([parseFloat(xCoor), parseFloat(yCoor)], {
            // Задержка между перемещениями.
            delay: 1500
        });
    }-*/;

    private void sendInfoToServer(final String uiActor) {
        UIContent uicRequest = new UIContent(sbCountry.getValue(), sbCity.getValue(),sbBank.getValue());


        gwtAppService.gwtCallServer(uicRequest, new MethodCallback<ResponceState>() {
            @Override
            public void onFailure(final Method method, final Throwable exception) {
                Window.alert("Ошибка. Сервер предоставления данных справочника не работает.");
            }

            @Override
            public void onSuccess(final Method method, final ResponceState result) {
                responceState = result;
                if (uiActor == "Country"){
                    MultiWordSuggestOracle oracle = (MultiWordSuggestOracle)sbCountry.getSuggestOracle();
                    oracle.clear();
                    for (String i : responceState.getCountrys()){
                        oracle.add(i);
                    }
                    sbCountry.refreshSuggestionList();
                    if ((responceState.getCountrys().length > 1) ||
                            (responceState.getCountrys().length == 1 & (responceState.getCountrys())[0] != uIContent.getCountry())) {
                        sbCountry.showSuggestionList();
                    }
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
                clearCollection();
                for (PointEntity i:responceState.getPoints()) {
                    addPlacemark(i.getBank(), i.getAddress(), i.getxCoor(), i.getyCoor());
                }
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
                }
            }
        }
        else {
            gPoint.resize(0,0);
        }
    }
}

