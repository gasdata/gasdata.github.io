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
        clickableIcons: false,
    };
    map = new google.maps.Map(document.getElementById("map"), options);
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
                './img/point.png',
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
        data[latestdatacount - x][7] = latestdata[x][6];
        data[latestdatacount - x][8] = latestdata[x][7];
        
        setMarkerClick(latestdatacount - x);
        
    }
    
    setFirstLine();
    autoReload();
    setLastMarkerIcon();
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
            "./img/point.png",
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
    addarray[7] = response[0][6];
    addarray[8] = response[0][7];
    
    data.push(addarray);
    
    setMarkerClick(data.length - 1);
    setLastMarkerIcon();
    showAlert("更新データを反映しました");
}

function setMarkerClick(x) {
    data[x][0].addListener('click', function() { // マーカーをクリックしたとき
        $("#エアロゾル1 nobr").text(data[x][1]);
        $("#エアロゾル2 nobr").text(data[x][2]);
        $("#気温 nobr").text(data[x][3]);
        $("#気圧 nobr").text(data[x][4]);
        $("#緯度 nobr").text(data[x][5]);
        $("#経度 nobr").text(data[x][6]);
        $("#日").text(data[x][7]);
        $("#時").text(data[x][8]);
        $("#map").css("width", "70%");
        
        $(".datawindow").show();
        $("#closebutton").show();
        
        //画像取得
        $(".datawindow #image img").attr("src", "https://maps.googleapis.com/maps/api/streetview?size=" + parseInt($(".datawindow #image").width()) + "x" + parseInt($(".datawindow #image").height())  + "&location=" + data[x][5] + "," + data[x][6] + "&fov=90&heading=0&pitch=15");
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

function setLastMarkerIcon() {
    
    data[data.length - 1][0].setMap(null); //マーカー削除
    data[data.length - 2][0].setMap(null); 
    
    var lastmarker = new google.maps.Marker({ //マーカー作成
        position: new google.maps.LatLng(data[data.length - 1][5], data[data.length - 1][6]),
        map: map,
        icon: new google.maps.MarkerImage(
            "./img/nowpoint.png"
        ),
    });
    
    var marker = new google.maps.Marker({ //マーカー作成
        position: new google.maps.LatLng(data[data.length - 2][5], data[data.length - 2][6]),
        map: map,
        icon: new google.maps.MarkerImage(
            "./img/point.png",
            new google.maps.Size(16, 16), //アイコンのずれ調整
            new google.maps.Point(0, 0),
            new google.maps.Point(8, 8)
        ),
    });
    
    data[data.length - 1][0] = lastmarker;
    data[data.length - 2][0] = marker;
    
    setMarkerClick(data.length - 1);
    setMarkerClick(data.length - 2);
}