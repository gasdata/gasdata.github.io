var firstdata = [];
var data = [];

function firstOpen() {
    $.ajax({
           url: "https://sheets.googleapis.com/v4/spreadsheets/1az8vFFz9h44o-eeaW4-3u6PQPC7-nZm0vzRJFmxlit8/values/%E3%82%B7%E3%83%BC%E3%83%881!A3:F6?key=AIzaSyDiSaDpQ61kQbjP5SfGhdiFfmloJrJvjEE",
           datatype : 'jsonp',
       }).done(function(data) { //成功
            var firstdatacount = 0;
            for(var x = 0; x < data.values.length; x++) {
                if(data.values[x].length == 6) {
                    firstdata[firstdatacount] = data.values[x];
                    firstdatacount++;
                } else {
                    //異常なデータ スルー
                }
            }
            onOpenMap();
            firstSetMarker();
            setFirstData();
       }).fail(function(data) { //失敗
            showAlert("データ取得に失敗しました。");
       });
}

function setFirstData() {
    data = [];
    var firstdatacount = firstdata.length;
    var marker = null;
    
    for(var x = 0; x < firstdata.length; x++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(firstdata[x][4]), parseFloat(firstdata[x][5])),
            map: map,
            icon: new google.maps.MarkerImage (
                'point.png'
            ),
        });
        
        data[firstdatacount - x] = [];
        
        data[firstdatacount - x][0] = marker;
        data[firstdatacount - x][1] = firstdata[x][0];
        data[firstdatacount - x][2] = firstdata[x][1];
        data[firstdatacount - x][3] = firstdata[x][2];
        data[firstdatacount - x][4] = firstdata[x][3];
        data[firstdatacount - x][5] = firstdata[x][4];
        data[firstdatacount - x][6] = firstdata[x][5];
        
        setClickEvent(firstdatacount - x);
        
    }
    
}

function setClickEvent(x) {
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

function setData() {
    
}


