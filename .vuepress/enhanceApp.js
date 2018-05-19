import Chart from 'frappe-charts/dist/frappe-charts.min.esm'
import {Tabs, Tab} from 'vue-tabs-component'
import VueSlider from 'vue-slider-component'

export default ({
	Vue,
	options,
	router,
	siteData
}) => {
	Vue.use(Chart)

	Vue.component('tabs', Tabs)
	Vue.component('tab', Tab)
	Vue.component('vue-slider', VueSlider)
}