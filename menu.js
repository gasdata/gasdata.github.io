//ページ読み込み時
$(document).ready( function(){
    $("#close").hide();
    $(".menu").css("margin-left", "-190px");
    $("#all").hide();
    $(".datawindow").hide();
    $("#closebutton").hide();
});

//メニュー開いたとき
$("#open").click( function() {
    $("#open").hide();
    $("#close").show();
    $(".menu").animate({"margin-left":'0px'},300);
    $("#all").show();
});

//メニュー閉じたとき
$("#close").click( function() {
    $("#open").show();
    $("#close").hide();
    $(".menu").animate({"margin-left":'-190px'},300);
});

//メニュー表示時にメニュー外クリックで閉じる
$("#map").click( function() {
    if(!$('#open').is(':visible')) {
        $("#open").show();
        $("#close").hide();
        $(".menu").animate({"margin-left":'-190px'},300);
    }
});

//データウィンドウクリックしたとき
$("#closebutton").click( function() {
    $("#closebutton").hide();
    $(".datawindow").hide();
    $("#map").css("width", "100%");
});

function showAlert(msg) {
    $(".alert p").text(msg);
    $(".alert").animate({"margin-right":'0px'},300);
    
    var timeout = function(){
        $(".alert").animate({"margin-right":'-210px'},300);
    } 
    setTimeout(timeout, 1000);
}

function setReloadTime() {
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();
    $("#最終更新 nobr").text(" " + hour + ":" + minute + ":" + second);
}