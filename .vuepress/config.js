module.exports = {
	title: 'Statistiktutorial',
	description: 'Eine Anleitung mit visuellen und interaktiven Elementen.',

	serviceWorker: true,
	port: '3100',
	dest: 'docs',

	head: [
		['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }]
	],

	themeConfig: {
		lastUpdated: 'Zuletzt aktualisiert',

		repo: 'bluefirex/statistics-tutorial',
		repoLabel: 'Beitragen!',

		editLinks: true,
		editLinkText: 'Seite editieren',

		nav: [
			{
				text: 'Startseite',
				link: '/'
			},

			{
				text: 'Aufgaben + Lösungen',
				link: '/aufgaben/'
			}
		],

		sidebarDepth: 2,

		sidebar: {
			'/': [
				{
					title: 'Grundlagen',
					collapsable: true,
					children: [
						'/grundlagen/lageparameter',
						'/grundlagen/streuungsparameter',
						'/grundlagen/zufallsvariablen',
						'/grundlagen/verteilungen',
					]
				}
			]
		}
	},

	configureWebpack: (config, isServer) => {
		if (isServer) {
			config.resolve.alias['@vue-slider'] = 'vue-slider-component/src/vue2-slider.vue'
		} else {
			config.resolve.alias['@vue-slider'] = 'vue-slider-component'
		}
	},

	markdown: {
		config: (md) => {
			md.use(require('markdown-it-katex'))
		}
	}
}