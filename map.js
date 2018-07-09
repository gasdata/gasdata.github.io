var map;
var latestdata;
var gotdata;
var i;
var datacount;

function makeDatabase() {
    for(var x = 0; x < 100; x++) {
        eval("var data" + x + ";");
        console.log(x + "番目のデータベース変数作成！");
    }
    for(var x = 0; x < 100; x++) {
        eval("var marker" + x + ";");
        console.log(x + "番目のマーカー変数作成！");
    }
    
}

function setDatabase(datacount) {
    eval("data" + datacount + " = " + latestdata + ";");
    datacount++;
}

function onFirstOpenMap() { //最初に地図が表示されたときの処理
    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(35.658581, 139.745433)
      };
    map = new google.maps.Map(document.getElementById("map"), opts);
    i = 0;
    datacount = 0;
    makeDatabase();
}

function getJson() {
    //Json取得する処理
    $.ajax({
       url: "https://gai1219.github.io/data.json",
       datatype : 'jsonp',
    }).done(function(data) {
        if(i == 0) {
            console.log("最初のデータを取得");
            latestdata = data;
            i = data.dataid;
            setMarker();
            setDatabase(datacount);
        } else {
            if(data.dataid - 1 == i) {
                latestdata = data;
                i = data.dataid;
                setDatabase(datacount);
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
//    var marker = new google.maps.Marker({
//        position: latlng,
//        title: "YAY"
//    });
    eval("marker" + datacount + " = new google.maps.Marker({position: " + latlng + "});");
//    marker.setMap(map);
    eval("marker" + datacount + ".setMap(" + map + ");");
}

//        "ido":"35.710063",     
//        "keido":"139.8107"
