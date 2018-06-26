/*
 * @desc this file...
 * @autor Ricardo Bossan ricardobossan@gmail.com
 *
 * feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', () => {
		/* This is our first test - it tests to make sure that the
		* allFeeds variable has been defined and that it is not
		* empty. Experiment with this before you get started on
		* the rest of this project. What happens when you change
		* allFeeds in app.js to be an empty array and refresh the
		* page?
		*/
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
						expect(Object.keys(aFeed)).toContain('url');
					});
					it('and that the name is not empty', () => {
						expect(Object.values(aFeed)[0]).toEqual(jasmine.any(String));
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
			/*
			 * function for clicking on the menu button
			 */
			var click = () => {
				menuIcon.click(function() {
					body.toggleClass('menu-hidden');
				});
			};
			// checks if menu opens when clicked
			click();
			expect(document.querySelector('body').classList.value).toBe("");
			// checks if menu closes when clicked
			click();
			expect(document.querySelector('body').classList.value).toBe("menu-hidden");
		});
	});

	describe('Initial Entries', () => {
		beforeEach((done) => {
			loadFeed(0, done);
		});
		it('have at least one entry', () => {
			const feed = document.querySelectorAll('.feed');
			const entry = document.querySelectorAll('.entry');
			/*
			 * expects the first node in the feed class node list to contain the child node to have a class value that equals "entry"
			 */
			expect($(".feed article")[0].classList.value).toEqual('entry');
		});
	});
	describe('New Feed Selection', () => {
		beforeEach((done) => {
			loadFeed(0, done);
		});
		it('actually changes content', (done) => {
			const entry = document.querySelectorAll('.entry');
			loadFeed(1, done);
			expect($(".feed article")[0].children[0].outerHTML).toEqual($(".feed article")[1].children[0].outerHTML);
		});
	});
}());
