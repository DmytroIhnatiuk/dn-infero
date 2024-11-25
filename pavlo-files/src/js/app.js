// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
import burger from "./modules/burger.js";

window['FLS'] = true;
// Підключення основного файлу стилів
import "../scss/style.scss";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import * as flsFunctions from "./core/functions.js";
import {scrollToAnchor} from "./modules/scrollToAnchor.js";
import {headerFixed} from "./modules/index.js";
import {disableScrollAndSwipes, enableScrollAndSwipes, getElement, getElements} from "./core/index.js";
import {body, header} from "./core/elementsNodeList.js";
import modalsEvents from "./modules/modalsEvents.js";
import Modal from "./modules/modal.js";
import {
    clientsSlider, proposalAdsSlider,
    sliderCourses,
    testimonialsSlider
} from "./modules/sliders.js";
import dropdown from "./modules/dropdown.js";
import tabs from "./modules/tabs.js";
import accordion, {accordionToggle} from "./modules/accordion.js";
import filter from "./modules/filter.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();

/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix();


// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

window.addEventListener("DOMContentLoaded", () => {
    try {
        // burger();
        // scrollToAnchor();
        // headerFixed();
        tabs();
        testimonialsSlider();
        sliderCourses();
        accordion();
        clientsSlider();
        proposalAdsSlider();
        accordionToggle(getElements('.toggle-accordion'));
        filter();
        if (location.search.indexOf("?s=") > -1) {
            console.log('s')
            const productSection = document.querySelector('#products');
            productSection.scrollIntoView({behavior: 'smooth'});
        }
        if (getElement('[data-more]')) {
            const moreParent = getElement('[data-more]');
            const moreBtn = getElement('[data-expand]');
            moreBtn?.addEventListener('click', function () {
                moreParent.classList.toggle('active');
                if (moreParent.classList.contains('active')) {
                    moreBtn.textContent = '- Collapse details';
                } else {
                    moreParent.scrollIntoView({behavior: "smooth"});
                    moreBtn.textContent = '+ Expand to see More Details';
                }
            })
        }
        const tiWidget = getElement('.ti-widget');
        if (!tiWidget) return;
        tiWidget.insertAdjacentHTML('beforeend', '<button class="ti-widget__hide"><</button>');
        getElement('.ti-widget__hide').addEventListener('click', function () {
            tiWidget.classList.toggle('ti-widget_hide');
        });
        window.addEventListener('scroll', function () {
            let totalHeight = document.body.scrollHeight; // получаем общую высоту скроллабельного контента
            // let viewportHeight = window.innerHeight; // высота окна просмотра
            let scrolledFromTop = window.scrollY; // высота прокрученной части от верха

            let tenPercent = totalHeight * 0.2; // вычисляем 10% от общей высоты

            if (scrolledFromTop > tenPercent && !tiWidget.classList.contains('ti-widget_hide')) {
                tiWidget.classList.add('ti-widget_hide');
            }
        });

        // otherSlider();
        // otherSliderCourses();
        // otherSliderOffice()


    } catch (e) {
        console.log(e);
    }
});

//acordeon----------------------------------------------

//acordeon----------------------------------------------
// const accordions = document.querySelectorAll('.category__filter_category-accordion')
// accordion(accordions);

// const accordionFour = document.querySelectorAll('.global-accordion-page__item')
// accordion(document.querySelectorAll('.global-accordion-page__item'))




