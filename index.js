var originFontSize;

$(window).resize(function() {
    originFontSize = parseInt($("#first-div-content").css('font-size'), 10);
});

$(document).ready(function() {
    $("#first-div-content").fitText(0.8);
    originFontSize = parseInt($("#first-div-content").css('font-size'), 10);
});

$(window).scroll(function () {
    var scrollPercent = $(window).scrollTop() / $(window).height(); // From 0 - 1.
    var topContentLeftHeight = $(window).height() - $(window).scrollTop();
    var nowFontSize =  originFontSize*(1-scrollPercent);
    if(nowFontSize > 15){
        $(".first-div-content-should-hide").css("font-size", nowFontSize);
    }
    if(nowFontSize > 35){
        $("#first-div-content").css("font-size", originFontSize*(1-scrollPercent));
    }
//    $("#first-div-content").css("bottom", 0);
    if(topContentLeftHeight <= $("nav").height()){
        $("nav").css("visibility", "visible");
    }else{
        $("nav").css("visibility", "hidden");
    }

//    $('#second-div').text("You've scrolled " + scrollPercent + " percent"+",font size:"+originFontSize);
});