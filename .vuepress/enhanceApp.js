import VueSlider from '@vue-slider'
import ElementUI from 'element-ui'

require('element-ui/lib/theme-chalk/index.css')

import Statistics from './lib/Statistics'

export default ({
	Vue,
	options,
	router,
	siteData
}) => {
	Vue.component('vue-slider', VueSlider)
	Vue.use(ElementUI)

	Vue.filter('number_format', function(value, decimals = 2, dropZeroes = false) {
		value = value * 1 // makes sure `number` is numeric value

		let parts = []
		let str

		let decPoint = '.',
			thousandsSeperator = ''

		if (dropZeroes) {
			str = value.toFixed(decimals || 0)
					   .replace('.' + '0'.repeat(decimals), '')
					   .toString()
					   .split('.')
		} else {
			str = value.toFixed(decimals || 0)
					   .toString()
					   .split('.')
		}

		for (let i = str[0].length; i > 0; i -= 3) {
			parts.unshift(str[0].substring(Math.max(0, i - 3), i));
		}

		str[0] = parts.join(thousandsSeperator)

		return str.join(decPoint)
	})

	Vue.prototype.$statistics = Statistics
	window.Statistics = Statistics
}