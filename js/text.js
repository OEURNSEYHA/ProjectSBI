$(document).ready(function(){
   $('.menu-bar').click(function(){
        $('.menu').css({'right':'0'});
   })
   $('.close-sidebar').click(function(){
    $('.menu').css({'right':'-100%'})
   })
})