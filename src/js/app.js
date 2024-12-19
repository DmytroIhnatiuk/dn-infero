window['FLS'] = true
// Підключення основного файлу стилів
import '../scss/tailwind/index.scss'
// import '../scss/style.scss'
import accordion from './modules/accordion.js'
import * as flsFunctions from './core/functions.js'
import {scrollToAnchor} from './modules/scrollToAnchor.js'
import burger from './modules/burger.js'
//
// import 'swiper/css'
import {
	conditionsSlider,
	dnClientsSlider,
	dnReviewsSlider,
} from './modules/sliders.js'

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp()
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass()
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();

/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix()

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';
function initAccordionOnSmallScreens() {
	if (window.innerWidth < 1024) {
		accordion('.dn-accordion', '.dn-accordion-header', '.dn-accordion-content')
	}
}

window.addEventListener('resize', () => {
	document.querySelectorAll('.dn-accordion-content').forEach(content => {
		content.style.maxHeight = null
	})
	initAccordionOnSmallScreens()
})

window.addEventListener('DOMContentLoaded', () => {
	try {
		if (window.innerWidth < 1024) {
			conditionsSlider()
		}
		dnClientsSlider()
		dnReviewsSlider()
		scrollToAnchor()
		burger()
		accordion(
			'.dn-accordion-faqs',
			'.dn-accordion-faqs__header',
			'.dn-accordion-faqs__content'
		)

		initAccordionOnSmallScreens()
	} catch (e) {
		console.log(e)
	}
})
