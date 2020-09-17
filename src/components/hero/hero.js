$('.hero__list').slick({
    slidesToShow: 1,
    prevArrow: $('.hero__slider-btn_prev'),
    nextArrow: $('.hero__slider-btn_next'),
    dots: false
})

$('.hero__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    let heroSection = document.querySelector('.hero');

    heroSection.classList.remove('hero_active-slide_1');
    heroSection.classList.remove('hero_active-slide_2');
    heroSection.classList.remove('hero_active-slide_3');

    heroSection.classList.add(`hero_active-slide_${nextSlide + 1}`);
});