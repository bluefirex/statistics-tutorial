import VueSlider from '@vue-slider'
import ElementUI from 'element-ui'

require('element-ui/lib/theme-chalk/index.css')

export default ({
	Vue,
	options,
	router,
	siteData
}) => {
	Vue.component('vue-slider', VueSlider)
	Vue.use(ElementUI)
}