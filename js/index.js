var originFontSize;
var scrollPercent = 0; //[0.1] [1,2] [2,++]
var arrowIsDown = true;

$(window).resize(function() {
    originFontSize = parseInt($("#first-div-content").css('font-size'), 10);
});

$(document).ready(function() {
    $("#first-div-content").fitText(0.8);
    $(".for-nav-padding").css("height", $("nav").height());
    originFontSize = parseInt($("#first-div-content").css('font-size'), 10);

    //down arrow
    $( "#div-nav-arrow" ).click(function() {
      if(scrollPercent>=0 && scrollPercent<1){
          $('html, body').animate({
              scrollTop: $("#second-div").offset().top
          }, 500);
      }else if(scrollPercent>=1 && scrollPercent<2){
          $('html, body').animate({
              scrollTop: $("#third-div").offset().top
          }, 500);
      }else if(scrollPercent>=2){
          $('html, body').animate({
              scrollTop: $("#first-div").offset().top
          }, 500);
      }
    });
    $( "nav" ).click(function() {
      $('html, body').animate({
        scrollTop: $("#first-div").offset().top
        }, 500);
    });
    
});

$(window).scroll(function () {
    scrollPercent = $(window).scrollTop() / $(window).height();
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

    //旋转箭头
    if(scrollPercent >= 2 && arrowIsDown){
        autoRotateArrow();
    } else if(scrollPercent < 2 && !arrowIsDown){
        autoRotateArrow();
    }
});

function autoRotateArrow(){
    var $elie = $("#div-nav-arrow"), degree,timer;
    if(arrowIsDown){ degree = 0; }else{ degree = 180;}
    arrowIsDown = !arrowIsDown;
    var originDegree =degree;
    rotate();
    function rotate() {
        // For webkit browsers: e.g. Chrome
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        // For Mozilla browser: e.g. Firefox
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

        // Animate rotation with a recursive call
        timer = setTimeout(function() {
            ++degree;
            if(degree<=originDegree+180){rotate();}
        },2);
    }
}

