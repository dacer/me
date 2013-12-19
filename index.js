$(document).ready(function() {
    var fontSize = parseInt($("#first_div").height())+"px";
    alert(fontSize);
    $("#first_div span").css('font-size', fontSize);
});