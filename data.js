var firstdata = [];

function firstOpen() {
    $.ajax({
           url: "https://sheets.googleapis.com/v4/spreadsheets/1az8vFFz9h44o-eeaW4-3u6PQPC7-nZm0vzRJFmxlit8/values/%E3%82%B7%E3%83%BC%E3%83%881!A3:F11?key=AIzaSyDiSaDpQ61kQbjP5SfGhdiFfmloJrJvjEE",
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
       }).fail(function(data) { //失敗
            console.log("データ取得失敗");
       });
}

