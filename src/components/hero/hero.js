$('.hero__list').slick({
    slidesToShow: 1,
    prevArrow: $('.hero__slider-btn_prev'),
    nextArrow: $('.hero__slider-btn_next'),
    dots: false
})

window.document.addEventListener('DOMContentLoaded', changeBgImg, document)

$('.hero__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    
    changeBgImg('change', slick.$slides[nextSlide]);
});

function changeBgImg(arg, nextSlideSlick) {

    let heroSection = document.querySelector('.hero'),
        currentImg;

    if (arg == 'change') {
        currentImg = nextSlideSlick.querySelector('.hero__img-for-bg').dataset.src;

        heroSection.style.backgroundImage = `url(${currentImg})`;
    } else {
        currentImg = document.querySelector('.hero__item.slick-active').querySelector('.hero__img-for-bg').dataset.src;

        heroSection.style.backgroundImage = `url(${currentImg})`;
    }

    
}
