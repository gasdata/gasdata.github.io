var map;

function onFirstOpenMap() {
    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(35.658581, 139.745433)
      };
    map = new google.maps.Map(document.getElementById("map"), opts);
}

function getJson() {
    var ido = 0;
    var keido = 0;
    //Json取得する処理
    $.ajax({
           url: "https://gai1219.github.io/data.json",
           datatype : 'jsonp',
        }).done(function(data) {
            if(data.ido && data.keido) {
                var tyuusin = new google.maps.LatLng(data.ido, data.keido);
                map.setCenter(tyuusin);
            }   
        })
}
