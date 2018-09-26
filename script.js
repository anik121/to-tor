$(document).ready(function () {
    $('.menu_trigger').click(function(){
        $('aside').css('transform','translateX(0)');
    });
    $('.close_trigger').click(function(){
        $('aside').css('transform','translateX(-100%)');
    });
    $('.scrollspy').scrollSpy();

    let win = $(window);
    win.scroll(function(){
        if(win.scrollTop() > 255){
            $('.go-top').fadeIn();
        }else{
            $('.go-top').fadeOut();
        }
    });
});