$(document).ready(function(){
    $('.testimonial__clients').slick({
        arrows:false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow:2,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        initialSlide:0,
        autoplay:true,
        pauseOnFocus:true,
        variableWidth:false,
        responsive: [
                {
                  breakpoint:1200,
                    settings: {
                    variableWidth:false,
                  }
                }, {
                  breakpoint:993,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }, {
                  breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth:true,
                  }
                }
            ]
    });
});


const menuIcon = document.querySelector('.menu-icon'),
    header = document.querySelector('header'),
    body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
    body.classList.toggle('no-scroll');
});
