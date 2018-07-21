var latestdata = [];
var data = [];

function firstOpen() { //ページオープン時
    $.ajax({
           url: "https://sheets.googleapis.com/v4/spreadsheets/185yPvhNOnMogOv-C3Xj0PC0r_4JazkcRrp6B7XHQ6q0/values/%E3%82%B7%E3%83%BC%E3%83%881!A3:F6?key=AIzaSyDiSaDpQ61kQbjP5SfGhdiFfmloJrJvjEE",
           datatype : 'jsonp',
       }).done(function(response) { //成功
            var latestdatacount = 0;
            for(var x = 0; x < response.values.length; x++) {
                if(response.values[x].length == 6) {
                    latestdata[latestdatacount] = response.values[x];
                    latestdatacount++;
                } else {
                    //異常なデータ スルー
                }
            }
        
            setReloadTime();
            onOpenMap();
            setFirstMarker();
       }).fail(function(response) { //失敗
            showAlert("データ取得に失敗しました。");
       });
}

function getData() { //10秒毎
    var getdata = [];
    $.ajax({
           url: "https://sheets.googleapis.com/v4/spreadsheets/185yPvhNOnMogOv-C3Xj0PC0r_4JazkcRrp6B7XHQ6q0/values/%E3%82%B7%E3%83%BC%E3%83%881!A3:F6?key=AIzaSyDiSaDpQ61kQbjP5SfGhdiFfmloJrJvjEE",
           datatype : 'jsonp',
       }).done(function(response) { //成功
            if(response.values.toString() == latestdata.toString()) {
                //更新データなし
            } else {
                //更新データあり
                showAlert("更新!");
                console.log("更新!");
                
                map.panTo(new google.maps.LatLng(response.values[0][4], response.values[0][5]));
                
                latestdata = response.values;
                
                setMarker(response.values);
            }
            
            setReloadTime();
       }).fail(function(response) { //失敗
            showAlert("データ取得に失敗しました。");
       });
}

function autoReload() {
    var count = 0;
    var countup = function(){
        console.log("count++");
        count++;
        
        if(count % 10 == 0) {
            console.log("10秒");
            getData();
        }
    } 
    setInterval(countup, 1000); //10秒毎
}


