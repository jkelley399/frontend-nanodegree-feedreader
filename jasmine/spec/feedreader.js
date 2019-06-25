/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

// import { loadFeed } from '../../js/app.js'

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
        /* TODO-JK: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        // This behavior is controlled by index.html in the body element.
        // A constant has been added to app.js, bodyElementClassList,
        // to save document.body.classList at load.  This test checks
        // to see whether that classList contains 'menu-hidden'
        // which is the class in style.css that moves the body element
        // outside the viewport and hides it.
        // Use of toContain based on: https://devhints.io/jasmine
        // consulted 2019-06-22
        it('is hidden by default', function() {
            expect(bodyElementClassList).toContain('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        // This behavior is controlled by app.js in menuIcon.on.
        // A variable has been added to app.js, bodyElementIsHidden,
        // to capture the state of the toggling of the 'menu-hidden' class.
        // Use of toContain based on: https://devhints.io/jasmine
        // consulted 2019-06-22
        // TODO-JK: Another, and more interesting, approach to this test might be to use
        // the [jasmine-jquery extension](https://github.com/velesin/jasmine-jquery),
        // which seems to be available [using npm](https://www.npmjs.com/package/jasmine-jquery),\
        // and [through a cdn](https://www.jsdelivr.com/package/npm/jasmine-jquery).
        // In particular, the [Jasmine cheatsheet](https://devhints.io/jasmine)
        // has a section, "Event spies," that suggests how one might instead spy
        // on the click events to which menuIcon.on in app.js responds.


        it('changes visibly when menu icon clicked', function() {
            if (bodyElementIsHidden) {
                expect(bodyElementClassList).toContain('menu-hidden');
            } else {
                expect(bodyElementClassList).not.toContain('menu-hidden');
            }
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    /* Third test suite, which is about the behavior of loadFeed(id, cb).*/


// TODO-JK 2019-06-24: Not currently working.

    describe('Initial Entries', function() {
    /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // Based upon prior test, above,
        // Also based on prior UDAC material, specifically AddressBookSpec.js, and
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/
        // querySelector
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
        // Global_Objects/Array/includes
        // Consulted 2019-06-22
        // TODO: Also based upon
        // https://jasmine.github.io/tutorials/async
        // Consulted 2019-06-23

        // NOTE-JK-2019-06-24: This beforeEach() method is further based upon
        // a specific suggestion from Udacity mentor Peter J.  After I had
        // exhausted my ideas for modifying beforeEach, I wrote to Peter J., he very
        // quickly and helpfully suggested passing two arguments to loadFeed, including
        // done, and he specifically suggested the statement for loadFeed that I have
        // used below, "loadFeed(0, done)" (see his direct message to me on 2019-06-24
        // at 1:34 PM PDT)
        beforeEach(function(done){

            loadFeed(0, done);
            done();
         });

        it('at least one .entry element in .feed container.', function(done) {
        // NOTE-JK-2019-06-24: After direct message from Trying new approach based on
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
            const feedDiv = document.querySelector('.feed');
            const entryElement = (document.querySelector('.feed')).querySelector('.entry');
            console.log(feedDiv);
            console.log(entryElement);
            expect(entryElement).toBeDefined();
            expect(entryElement.length).not.toBe(0);
            done();
            // Brute force route foward:
            // feedDiv.childNodes[1].childNodes[1].classList.value;
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());


// Materials relied upon in addition to Udacity course material
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// consulted 2019-06-21
// https://developer.mozilla.org/en-US/docs/Web/API/Document/body
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://devhints.io/jasmine
// https://github.com/velesin/jasmine-jquery
// https://www.npmjs.com/package/jasmine-jquery
// https://www.jsdelivr.com/package/npm/jasmine-jquery
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://jasmine.github.io/tutorials/async
// consulted 2019-06-22

// Based on:
// consulted 2019-06-22

// https://jasmine.github.io/tutorials/async
// https://www.techiediaries.com/jasmine-testing-tutorial/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// https://stackoverflow.com/questions/41722621/es6-in-the-browser-uncaught-syntaxerror-unexpected-token-import/45745913

// consulted 2019-06-23

// *************
// const feedDiv = document.querySelector('.feed');
// let a = feedDiv.childNodes;
// let aArray = Array.from(a);
// aArray[1].childNodes[1].classList[0] == 'entry';

// const feedDiv = document.querySelector('.feed');
// let a = feedDiv.childNodes;
// a[0].classList; //undefined
// a[1].classList; // DOMTokenList ["entry-link", value: "entry-link"]
// c = a[1].classList;
// c.contains('entry-link'); //true

// const entryDiv = document.querySelector('.entry');
// entryDiv.classList.contains('feed');
// entryDiv.parentElement.parentElement.classList.contains('feed');

