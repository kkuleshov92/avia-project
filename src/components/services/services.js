let servicesWrap = $('.services__wrap');

if (servicesWrap) {

    $('.services__wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        prevArrow: $('.services__slider-btn_prev'),
        nextArrow: $('.services__slider-btn_next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: false,
                centerPadding: '50px',
            }
        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
                centerMode: false,
                centerPadding: '0px',
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        }]
    })
}