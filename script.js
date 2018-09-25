$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        indicators: true
    });

    $('.menu_trigger').click(function(){
        $('aside').css('transform','translateX(0)');
    });
    $('.close_trigger').click(function(){
        $('aside').css('transform','translateX(-100%)');
    });
});