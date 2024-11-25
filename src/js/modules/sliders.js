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

export { conditionsSlider }
