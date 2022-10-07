$(document).ready(function(){
    $('.testimonial__clients').slick({
        arrows:false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow:2,
        slidesToScroll:2,
        speed:1000,
        easing:'linear',
        initialSlide:0,
        autoplay:true,
        pauseOnFocus:true,
        responsive: [
                {
                  breakpoint: 720,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
    });
});