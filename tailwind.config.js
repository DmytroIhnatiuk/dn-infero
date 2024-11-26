/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,htm,js}'],
	theme: {
		spacing: {
			0: '0',
			4: '.04rem',
			8: '.08rem',
			10: '.1rem',
			14: '.14rem',
			16: '.16rem',
			20: '.20rem',
			24: '.24rem',
			26: '.26rem',
			32: '.32rem',
			36: '.36rem',
			40: '.40rem',
			50: '.50rem',
			60: '.60rem',
			90: '.90rem',
			100: '1rem',
		},
		extend: {
			fontSize: {
				s: '.14rem',
				m: '.16rem',
				l: '.2rem',
			},
		},
	},
	plugins: [],
}
