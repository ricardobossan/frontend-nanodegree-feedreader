/* feedreader.js
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


		/* TODO: Write a test that loops through each feed
		* in the allFeeds object and ensures it has a URL defined
		* and that the URL is not empty.
		*/
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


		/* TODO: Write a test that loops through each feed
		* in the allFeeds object and ensures it has a name defined
		* and that the name is not empty.
		*/
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


	/* TODO: Write a new test suite named "The menu" */
	/* TODO: Write a test that ensures the menu element is
		* hidden by default. You'll have to analyze the HTML and
		* the CSS to determine how we're performing the
		* hiding/showing of the menu element.
		*/
	describe('The Menu', () => {
		const slideClassDiv = document.querySelector('.slide-menu');
		var menuIcon = document.querySelector('.menu-icon-link');
		var body = document.querySelector('body');
		it('is hidden by default', () => {
			expect(window.getComputedStyle(slideClassDiv).transform).toEqual("matrix(1, 0, 0, 1, -192, 0)");
			expect(window.getComputedStyle(slideClassDiv).transition).toContain("transform 0.2s");
		});
		/* TODO: Write a test that ensures the menu changes
			* visibility when the menu icon is clicked. This test
			* should have two expectations: does the menu display when
			* clicked and does it hide when clicked again.
			*/
		it('when clicked, is either displayed', () => {
			menuIcon.click(function() {
				body.toggleClass('menu-hidden');
			});
			expect(document.querySelector('body').classList.value).toBe("");
		});
		it('or hidden', () => {

			menuIcon.click(function() {
				body.toggleClass('menu-hidden');
			});
			expect(document.querySelector('body').classList.value).toBe("menu-hidden");
		});
	});


	/* TODO: Write a new test suite named "Initial Entries" */

	/* TODO: Write a test that ensures when the loadFeed
		* function is called and completes its work, there is at least
		* a single .entry element within the .feed container.
		* Remember, loadFeed() is asynchronous so this test will require
		* the use of Jasmine's beforeEach and asynchronous done() function.
		*/
	describe('Initial Entries', () => {
		beforeEach((done) => {
/*			allFeeds.forEach(function(feed) {
*/				loadFeed(0, done);
/*			});
*/		});
		it('have at least one entry', () => {
			const entry = document.querySelectorAll('.entry');
			expect(entry.length).toBeGreaterThan(1);
		});
	});
	/* TODO: Write a new test suite named "New Feed Selection" */
	/* TODO: Write a test that ensures when a new feed is loaded
		* by the loadFeed function that the content actually changes.
		* Remember, loadFeed() is asynchronous.
	*/
	describe('New Feed Selection', () => {
		beforeEach((done) => {
			loadFeed(0, done);
		});
		it('actually changes content', () => {
			const entry = document.querySelectorAll('.entry');
			expect(entry[0].children.item(0).outerHTML).not.toEqual(entry[1].children.item(0).outerHTML);
		});
	});
}());