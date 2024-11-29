import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { getElement, getElements } from '../core/index.js'

function conditionsSlider() {
	if (!getElement('[data-swiper="conditionsSlider"]')) return
	new Swiper('[data-swiper="conditionsSlider"]', {
		modules: [Autoplay],
		spaceBetween: 32,
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
		},
	})
}

function dnClientsSlider() {
	if (!getElement('[data-swiper="dnClientsSlider"]')) return
	new Swiper('[data-swiper="dnClientsSlider"]', {
		modules: [Navigation],
		spaceBetween: 38,
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		navigation: {
			nextEl: '.dnClientsSlider-prev',
			prevEl: '.dnClientsSlider-next',
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 6,
			},
		},
	})
}

export { conditionsSlider, dnClientsSlider }
