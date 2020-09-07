window.document.addEventListener('DOMContentLoaded', function(){

    let swiperSlider = document.querySelector('.swiper-container');

    if (swiperSlider) {

        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            slidesPerView: 5,
            loop: true,
            grabCursor: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            simulateTouch: false,
            effect: 'coverflow',
            addSlidesBefore: 2,
            addSlidesAfter: 2,
            coverflowEffect: {
                rotate: 0,
                stretch: 1060,
                depth: 100,
                modifier: 1,
                slideShadows: false
            },
            navigation: {
              nextEl: '.faq-slider__slider-btn_prev',
              prevEl: '.faq-slider__slider-btn_next',
            },
            breakpoints: {
                1300: {
                    addSlidesBefore: 2,
                    addSlidesAfter: 2,
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 1060,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    },
                },
                1023: {
                  autoHeight: true,
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 600,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }
                },
                767: {
                    autoHeight: true,
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 30,
                        stretch: 350,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    centeredSlides: true,
                    effect: 'slide'
                }
              }
          })
    }

})