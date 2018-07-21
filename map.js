var map;

function onFirstOpenMap() { //最初に地図が表示されたときの処理
    firstOpen();
}

function onOpenMap() { //最初に地図が表示されたときの処理
//    var lat = parseFloat(firstdata[0][4]);
//    var lng = parseFloat(firstdata[0][5]);
    var options = {
        zoom: 18,
        center: new google.maps.LatLng(35.6605, 139.729056),
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: { 
            position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
    };
    map = new google.maps.Map(document.getElementById("map"), options);
    showAlert("地図を表示しました。");
}