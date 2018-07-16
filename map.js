var map;
var mapOptions = {
}

function onFirstOpenMap() { //最初に地図が表示されたときの処理
    firstOpen();
}

function onOpenMap() { //最初に地図が表示されたときの処理
    var lat = parseFloat(firstdata[0][4]);
    var lng = parseFloat(firstdata[0][5]);
    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(lat, lng),
        streetViewControl: false,
        mapTypeControlOptions: { 
            position: google.maps.ControlPosition.LEFT_BOTTOM,
        }
    };
    map = new google.maps.Map(document.getElementById("map"), opts);
}

function firstSetMarker() {
}


 

