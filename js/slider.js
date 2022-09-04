$(document).ready(function(){
    $('.slider').slick({
        infinite: false,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive:[{
            breakpoint: 1251,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
});