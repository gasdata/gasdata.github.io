var map;
var latestdata;
var gotdata;
var i;

function onFirstOpenMap() {
    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(35.658581, 139.745433)
      };
    map = new google.maps.Map(document.getElementById("map"), opts);
    i = 0;
}

function getJson() {
    //Json取得する処理
    $.ajax({
       url: "https://gai1219.github.io/data.json",
       datatype : 'jsonp',
    }).done(function(data) {
        if(i == 0 && data.dataid == 0) {
            console.log("最初のデータを取得");
            latestdata = data;
            i = data.dataid;
            setMarker();
        } else {
            if(data.dataid - 1 == i) {
                latestdata = data;
                i = data.dataid;
                console.log("data更新成功！" + i);
                setMarker();
            } else {
                console.log("dataidがおかしい");
            }
        }
    })
}

function setMarker() {
    var latlng = new google.maps.LatLng(latestdata.ido, latestdata.keido);
    var marker = new google.maps.Marker({
        position: latlng,
        title: "YAY"
    })
    marker.setMap(map);
}
