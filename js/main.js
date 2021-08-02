"use strict";

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function changeBgImg(e, t) {
    var r = document.querySelector(".hero"),
        i = "change" == e ? t.querySelector(".hero__img-for-bg").dataset.src : document.querySelector(".hero__item.slick-active").querySelector(".hero__img-for-bg").dataset.src;
    r.style.backgroundImage = "url(".concat(i, ")")
}
window.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".bars"),
        t = document.querySelector(".header__menu-wrapper");
    if (!e) return !1;
    e.addEventListener("click", function () {
        this.classList.toggle("is-active"), t.classList.toggle("is-active")
    })
}), $(".hero__list").slick({
    slidesToShow: 1,
    prevArrow: $(".hero__slider-btn_prev"),
    nextArrow: $(".hero__slider-btn_next"),
    dots: !1
}), window.document.addEventListener("DOMContentLoaded", changeBgImg, document), $(".hero__list").on("beforeChange", function (e, t, r, i) {
    changeBgImg("change", t.$slides[i])
});
var servicesWrap = $(".services__wrap");
servicesWrap && $(".services__wrap").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: !1,
    centerMode: !0,
    centerPadding: "0px",
    variableWidth: !0,
    prevArrow: $(".services__slider-btn_prev"),
    nextArrow: $(".services__slider-btn_next"),
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: !1,
            centerMode: !1,
            centerPadding: "50px"
        }
    }, {
        breakpoint: 1023,
        settings: {
            slidesToShow: 2,
            variableWidth: !1,
            centerMode: !1,
            centerPadding: "0px"
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1
        }
    }]
}), window.document.addEventListener("DOMContentLoaded", function () {
    var r = document.querySelectorAll(".gallery__item");
    r && (r.forEach(function (e, t) {
        e.addEventListener("click", function () {
            r.forEach(function (e) {
                e.classList.remove("is-active")
            }), this.classList.add("is-active")
        })
    }), $(".gallery__photo").length && $(".gallery__photo").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    }))
}), $(".reviews__list").slick({
    slidesToShow: 1,
    arrows: !1,
    dots: !0
}), window.document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".question") && $(".question__item").click(function (e) {
        this.classList.contains("is-active") ? (this.classList.remove("is-active"), $(this).find(".question__text").slideUp()) : (this.classList.add("is-active"), $(this).find(".question__text").slideDown())
    })
}), window.document.addEventListener("DOMContentLoaded", function () {
    var e;
    document.querySelector(".swiper-container") && new Swiper(".swiper-container", (_defineProperty(e = {
        direction: "horizontal",
        slidesPerView: 5,
        loop: !0,
        grabCursor: !1
    }, "slidesPerView", "auto"), _defineProperty(e, "centeredSlides", !0), _defineProperty(e, "simulateTouch", !1), _defineProperty(e, "effect", "coverflow"), _defineProperty(e, "addSlidesBefore", 2), _defineProperty(e, "addSlidesAfter", 2), _defineProperty(e, "coverflowEffect", {
        rotate: 0,
        stretch: 1060,
        depth: 100,
        modifier: 1,
        slideShadows: !1
    }), _defineProperty(e, "navigation", {
        nextEl: ".faq-slider__slider-btn_prev",
        prevEl: ".faq-slider__slider-btn_next"
    }), _defineProperty(e, "breakpoints", {
        1300: {
            addSlidesBefore: 2,
            addSlidesAfter: 2,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                stretch: 1060,
                depth: 100,
                modifier: 1,
                slideShadows: !1
            }
        },
        1023: {
            autoHeight: !0,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                stretch: 600,
                depth: 100,
                modifier: 1,
                slideShadows: !1
            }
        },
        767: {
            autoHeight: !0,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 30,
                stretch: 350,
                depth: 100,
                modifier: 1,
                slideShadows: !1
            }
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !0,
            centeredSlides: !0,
            effect: "slide"
        }
    }), e))
});