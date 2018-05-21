import {Tabs, Tab} from 'vue-tabs-component'
import VueSlider from '@vue-slider'

export default ({
	Vue,
	options,
	router,
	siteData
}) => {
	Vue.component('tabs', Tabs)
	Vue.component('tab', Tab)
	Vue.component('vue-slider', VueSlider)
}