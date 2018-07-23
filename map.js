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
            position: google.maps.ControlPosition.TOP_LEFT,
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
                'point.png',
                new google.maps.Size(16, 16), //アイコンのずれ調整
                new google.maps.Point(0, 0),
                new google.maps.Point(8, 8)
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
    
    setFirstLine();
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
        $("#map").css("width", "70%")
    });
}

function setFirstLine() {
    for(var x = data.length - 1; x - 1 >= 1; x--) {
        var latlng = [new google.maps.LatLng(data[x][5], data[x][6]), new google.maps.LatLng(data[x - 1][5], data[x - 1] [6])];
        
        var lineoptions = {
            path: latlng,
            strokeWeight: 1,
            strokeColor: "#0000ff",
            strokeOpacity: "1.0"
        };
        
        var line = new google.maps.Polyline(lineoptions);
        line.setMap(map);
    }
}

function setMarker(response) {
    marker = new google.maps.Marker({ //マーカー作成
        position: new google.maps.LatLng(response[0][4], response[0][5]),
        map: map,
        icon: new google.maps.MarkerImage(
            "point.png",
            new google.maps.Size(16, 16), //アイコンのずれ調整
            new google.maps.Point(0, 0),
            new google.maps.Point(8, 8)
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
        $("#map").css("width", "70%")
    });
}

function setLine() {
    var latlng = [new google.maps.LatLng(data[data.length - 1][5], data[data.length - 1][6]), new google.maps.LatLng(data[data.length - 2][5], data[data.length - 2][6])];
        
    var lineoptions = {
        path: latlng,
        strokeWeight: 1,
        strokeColor: "#0000ff",
        strokeOpacity: "1.0"
    };
    
    var line = new google.maps.Polyline(lineoptions);
    line.setMap(map);
}