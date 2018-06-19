function onFirstOpenMap() {
    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(35.709984,139.810703)
      };
    var map = new google.maps.Map(document.getElementById("map"), opts);
}

function getJson() {
    var map = new google.maps.Map(document.getElementById("map"), opts);

    var ido = 0;
    var keido = 0;
    //Json取得する処理
    $.ajax({
           url: "data.json",
           datatype : 'jsonp',
        }).done(function(data) {
            if(data.ido && data.keido) {
                ido = data.ido;
                keido = data.keido;
                var tyuusin = new google.maps.Lating(ido, keido);
                map.setCenter(tyuusin);
            }   
        })
        
}
