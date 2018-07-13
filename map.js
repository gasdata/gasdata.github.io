var map;

function onFirstOpenMap() { //最初に地図が表示されたときの処理
    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(35.658581, 139.745433)
      };
    map = new google.maps.Map(document.getElementById("map"), opts);
}

function onClick() {
    //phpでdbからデータをもらう処理
    $.ajax({
            type: "POST",
            url: "https://script.googleapis.com/v1/scripts/M0G5u2sRGeIyZS_9lih8brgnfG7kaZY5d:run",
            data: {
                "function": "doGet",
                "devmode": true
            },
            datatype : "text",
       }).done(function(data) {
            console.log(data);
       }).fail(function(data) {
            console.log(data);
       });
}

function setMarker() {
    var marker = new google.maps.Marker();
    var markerObj = new Object();
//    markerObj.lat = //phpの緯度変数
//    markerObj.lng = //phpの経度変数
//    markerObj.kion = //気温
    //...オブジェクトと変数の設定
    
}
 

