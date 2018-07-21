var map;

function onFirstOpenMap() { //最初に地図が表示されたときの処理
    firstOpen();
}

function onOpenMap() { //最初に地図が表示されたときの処理
    var lat = parseFloat(latestdata[0][4]);
    var lng = parseFloat(latestdata[0][5]);
    var options = {
        zoom: 18,
        center: new google.maps.LatLng(lat, lng),
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: { 
            position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
    };
    map = new google.maps.Map(document.getElementById("map"), options);
    showAlert("地図を表示しました。");
}

function setFirstMarker() {
    data = [];
    var latestdatacount = latestdata.length;
    var marker = null;
    
    for(var x = 0; x < latestdata.length; x++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(latestdata[x][4]), parseFloat(latestdata[x][5])),
            map: map,
            icon: new google.maps.MarkerImage (
                'point.png'
            ),
        });
        
        data[latestdatacount - x] = [];
        
        data[latestdatacount - x][0] = marker;
        data[latestdatacount - x][1] = latestdata[x][0];
        data[latestdatacount - x][2] = latestdata[x][1];
        data[latestdatacount - x][3] = latestdata[x][2];
        data[latestdatacount - x][4] = latestdata[x][3];
        data[latestdatacount - x][5] = latestdata[x][4];
        data[latestdatacount - x][6] = latestdata[x][5];
        
        setFirstMarkerClick(latestdatacount - x);
        
    }
    
    autoReload();
}

function setFirstMarkerClick(x) {
    data[x][0].addListener('click', function() { // マーカーをクリックしたとき
        $("#エアロゾル1 nobr").text(data[x][1]);
        $("#エアロゾル2 nobr").text(data[x][2]);
        $("#気温 nobr").text(data[x][3]);
        $("#気圧 nobr").text(data[x][4]);
        $("#緯度 nobr").text(data[x][5]);
        $("#経度 nobr").text(data[x][6]);
        
        $(".datawindow").show();
    });
}

function setMarker(response) {
    marker = new google.maps.Marker({ //マーカー作成
        position: new google.maps.LatLng(response[0][4], response[0][5]),
        map: map,
        icon: new google.maps.MarkerImage(
            "point.png"
        ),
    });
    
    var addarray = [];
    
    addarray[0] = marker;
    addarray[1] = response[0][0];
    addarray[2] = response[0][1];
    addarray[3] = response[0][2];
    addarray[4] = response[0][3];
    addarray[5] = response[0][4];
    addarray[6] = response[0][5];
    
    data.push(addarray);
    
    setMarkerClick();
}

function setMarkerClick() {
    data[data.length - 1][0].addListener('click', function() { // マーカーをクリックしたとき
        $("#エアロゾル1 nobr").text(data[data.length - 1][1]);
        $("#エアロゾル2 nobr").text(data[data.length - 1][2]);
        $("#気温 nobr").text(data[data.length - 1][3]);
        $("#気圧 nobr").text(data[data.length - 1][4]);
        $("#緯度 nobr").text(data[data.length - 1][5]);
        $("#経度 nobr").text(data[data.length - 1][6]);
        
        $(".datawindow").show();
    });
}