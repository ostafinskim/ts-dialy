import favoriteSongs from "./favorite-songs"

test(() => {
	expect(favoriteSongs([
		{ "title": "Sync or Swim", "plays": 3 },
		{ "title": "Byte Me", "plays": 1 },
		{ "title": "Earbud Blues", "plays": 2 }
	])).toBe(["Sync or Swim", "Earbud Blues"]),
		expect(favoriteSongs([
			{ "title": "Skip Track", "plays": 98 },
			{ "title": "99 Downloads", "plays": 99 },
			{ "title": "Clickwheel Love", "plays": 100 }
		])).toBe(["Clickwheel Love", "99 Downloads"]),
		expect(favoriteSongs([
			{ "title": "Song A", "plays": 42 },
			{ "title": "Song B", "plays": 99 },
			{ "title": "Song C", "plays": 75 }
		])).toBe(["Song B", "Song C"])
})