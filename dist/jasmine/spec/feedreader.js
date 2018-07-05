/**
 * @file feedreader.js: Tests for the app.js logic
 * @autor Ricardo Bossan <ricardobossan@gmail.com>
 */

$(function() {
	describe('RSS Feeds', () => {

		it('are defined', () => {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		describe('have', () => {
			allFeeds.forEach(function(aFeed){
				describe(`in this feed`, () => {
					it('an url defined', () => {
						expect(Object.keys(aFeed)).toContain('url');
					});
					it('and that the url is not empty', () => {
						expect(Object.values(aFeed)[1]).toContain('http://');
					});
				});
			});
		});

		describe('have', () => {
			allFeeds.forEach(function(aFeed){
				describe(`in this feed`, () => {
					it('an name defined', () => {
						expect(aFeed.name).not.toBe('');
					});
					it('and that the name is not empty', () => {
						expect(aFeed.name.length).not.toBe(0);
					});
				});
			});
		});
	});

	describe('The Menu', () => {
		const slideClassDiv = document.querySelector('.slide-menu');
		var menuIcon = document.querySelector('.menu-icon-link');
		var body = document.querySelector('body');
		it('is hidden by default', () => {
			expect(window.getComputedStyle(slideClassDiv).transform).toEqual("matrix(1, 0, 0, 1, -192, 0)");
			expect(window.getComputedStyle(slideClassDiv).transition).toContain("transform 0.2s");
		});
		it('when clicked, is either displayed or hidden', () => {

			// checks if menu starts hidden
			expect(body.classList.value).toBe("menu-hidden");
			menuIcon.click();
			// checks if menu is opened, when clicked
			expect(body.classList.value).toBe("");
			menuIcon.click();
			// checks if menu is closed again when clicked one more time
			expect(body.classList.value).toBe("menu-hidden");
		});
	});

	describe('Initial Entries', () => {
		beforeEach((done) => {
			loadFeed(0, done);
		});
		it('have at least one entry', () => {
			const feed = document.querySelector('.feed');
			const articles = feed.querySelectorAll('article');
			expect(articles[0].classList.value).toBe('entry');
		});
	});

	describe('New Feed Selection', () => {
		let entry;
		beforeEach((done) => {
			loadFeed(0, () => {
				entry = document.querySelector('.feed').innerHTML;
				loadFeed(1, done);
			});
		});
		it('actually changes content', () => {
			expect(entry).not.toEqual(document.querySelector('.feed').innerHTML);
		});
	});
}());