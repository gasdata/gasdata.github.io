$(document).ready( function(){
    $("#close").hide();
    $(".menu").css("margin-left", "-190px");
});

$("#open").click( function() {
    $("#open").hide();
    $("#close").show();
    $(".menu").animate({"margin-left":'0px'},300);
});

$("#close").click( function() {
    $("#open").show();
    $("#close").hide();
    $(".menu").animate({"margin-left":'-190px'},300);
});