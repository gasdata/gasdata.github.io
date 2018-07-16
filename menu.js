//ページ読み込み時
$(document).ready( function(){
    $("#close").hide();
    $(".menu").css("margin-left", "-190px");
    $("#all").hide();
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
$("#main").click( function() {
    if(!$('#open').is(':visible')) {
        $("#open").show();
        $("#close").hide();
        $(".menu").animate({"margin-left":'-190px'},300);
    }
});