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
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        /* the for...loop in each of the following two tests is based upon
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript
         * /Reference/Statements/for...of
         * consulted 2019-06-21
         */
        it('and all their URLs are defined and non-empty', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect((feed.url).length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('and all their names are defined and non-empty', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect((feed.name).length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    /* Second test suite, which is about the behavior of the menu.*/
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
     // NOTE 2019-06-21: This behavior seems to be controlled by index.html
    // <body class="menu-hidden">
    //     <div class="header">
    //         <a href="#" class="menu-icon-link">
    //             <i class="icon-list"></i>
    //         </a>

    //         <h1 class="header-title">Feeds</h1>
    //     </div>

        it('is hidden by default', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
     // NOTE 2019-06-21: This behavior seems to be controlled by app.js:

    /* When the menu icon is clicked on, we need to toggle a class
     * on the body to perform the hiding/showing of our menu.
     */
     //    menuIcon.on('click', function() {
     //        $('body').toggleClass('menu-hidden');
     //    });

        it('changes visibly when menu icon clicked', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());


// Materials relied upon in addition to Udacity course material
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// consulted 2019-06-21
