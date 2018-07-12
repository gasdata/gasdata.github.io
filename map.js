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
}

function setMarker() {
    var marker = new google.maps.Marker();
    var markerObj = new Object;
    markerObj.lat = //phpの緯度変数
    markerObj.lng = //phpの経度変数
    markerObj.kion = //気温
    //...オブジェクトと変数の設定
    
}
 

