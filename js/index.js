var originFontSize;

$(window).resize(function() {
    originFontSize = parseInt($("#first-div-content").css('font-size'), 10);
});

$(document).ready(function() {
    $("#first-div-content").fitText(0.8);
    $(".for-nav-padding").css("height", $("nav").height());
    originFontSize = parseInt($("#first-div-content").css('font-size'), 10);

    //down arrow
    $( "#first-div-arrow" ).click(function() {
      $('html, body').animate({
        scrollTop: $("#second-div").offset().top
        }, 500);
    });
    $( "#second-div-arrow" ).click(function() {
      $('html, body').animate({
        scrollTop: $("#thrid-div").offset().top
        }, 500);
    });
    $( "nav" ).click(function() {
      $('html, body').animate({
        scrollTop: $("#first-div").offset().top
        }, 500);
    });
    
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
    if(topContentLeftHeight <= $("nav").height()){
        $("nav").css("visibility", "visible");
        $("#first-div-content").css("visibility", "hidden");

    }else{
        $("nav").css("visibility", "hidden");
        $("#first-div-content").css("visibility", "visible");
    }
});

