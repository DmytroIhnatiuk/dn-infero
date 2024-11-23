import { header } from '../core/elementsNodeList.js'
import { disableScrollAndSwipes, enableScrollAndSwipes } from '../core/index.js'
const burger = () => {
	if (header) {
		const burger = header.querySelector('.burger')
		const menu = header.querySelector('.dn-header__main', header)

		burger.addEventListener('click', () => {
			const scrollPosition =
				burger.dataset.position && burger.dataset.position !== '0'
					? burger.dataset.position
					: scrollY || document.documentElement.scrollTop
			if (burger.classList.contains('active')) {
				enableScrollAndSwipes(scrollPosition)
				burger.dataset.position = '0'
				setTimeout(() => {
					burger.classList.remove('active')
					menu.classList.remove('active')
				}, 100)
			} else {
				burger.dataset.position = scrollPosition
				disableScrollAndSwipes(scrollPosition)
				burger.classList.add('active')
				menu.classList.add('active')
			}
		})
	}
}
export default burger
