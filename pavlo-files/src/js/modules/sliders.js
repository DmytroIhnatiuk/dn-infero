import Swiper from "swiper";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {getElement, getElements} from "../core/index.js";

function testimonialsSlider() {
    const swiperContainer = getElement('[data-swiper="testimonials"]');
    if (swiperContainer) {
        new Swiper(swiperContainer, {
            modules: [Pagination, Autoplay],
            spaceBetween: 18,
            slidesPerView: 1,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            autoHeight: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

        });
    }
}

function clientsSlider() {
    if (getElement('[data-swiper="clients-slider"]')) {
        new Swiper('[data-swiper="clients-slider"]', {
            modules: [Navigation, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            autoHeight: true,
            loop: true,
            navigation: {
                nextEl: '[data-nav-clients="next"]',
                prevEl: '[data-nav-clients="prev"]',
            },
            breakpoints: {
                576: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 6,
                }
            }


        });


        const slidesCount = getElements('[data-swiper="clients-slider"] .swiper-slide').length;
        if (slidesCount <= 3 && screen.availWidth > 576) {
            getElement('[data-nav-clients="prev"]').classList.add('hide');
            getElement('[data-nav-clients="next"]').classList.add('hide');
        }
    }
}

function sliderCourses() {
    if (getElement('[data-swiper="courses-slider"]')) {
        new Swiper('[data-swiper="courses-slider"]', {
            modules: [Navigation, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            autoHeight: true,
            loop: true,
            navigation: {
                nextEl: '[data-nav-courses="next"]',
                prevEl: '[data-nav-courses="prev"]',

            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }


        });


        const slidesCount = getElements('[data-swiper="courses-slider"] .swiper-slide').length;
        if (slidesCount <= 3 && screen.availWidth > 576) {
            getElement('[data-nav-courses="prev"]').classList.add('hide');
            getElement('[data-nav-courses="next"]').classList.add('hide');
        }
    }
}


function proposalAdsSlider() {
    const swiperContainer = getElement('[data-swiper="proposal-slider"]');
    if (swiperContainer) {
        new Swiper(swiperContainer, {
            modules: [Navigation, Autoplay],
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            navigation: {
                nextEl: '[data-nav-proposal="next"]',
                prevEl: '[data-nav-proposal="prev"]',

            },


        });
    }
}

export {testimonialsSlider, clientsSlider, proposalAdsSlider, sliderCourses};