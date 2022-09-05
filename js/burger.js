$(document).ready(function() {
    $('.header-burger').click(function(){
        $('.header-burger').toggleClass('open-menu');
        $('.header-menu').toggleClass('open-menu');
        $('.header-title').toggleClass('open-menu');
        $('.header-burger--icon').toggleClass('open-menu');
    });
});