module.exports = {
	title: 'Statistiktutorial',
	description: 'Eine Anleitung mit visuellen und interaktiven Elementen.',

	serviceWorker: true,
	port: '3100',
	dest: 'docs',

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
			}
		],

		sidebarDepth: 3,

		sidebar: {
			'/': [
				{
					title: 'Grundlagen',
					collapsable: true,
					children: [
						'/lageparameter',
						'/verteilungen',
					]
				}
			]
		}
	}
}