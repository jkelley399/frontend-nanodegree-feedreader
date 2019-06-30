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


// TODO-JK 2019-06-25: Now working based on Udacity mentor Peter J.'s help

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

        // NOTE-JK-2019-06-25: This beforeEach() method is further based upon
        // two specific suggestions from Udacity mentor Peter J.  First, on 2019-06-24,
        // after I had exhausted my ideas for modifying beforeEach, I wrote to Peter J.,
        // he very quickly and helpfully suggested passing two arguments to loadFeed,
        // including done, and he specifically suggested the statement for loadFeed that
        // I have used below, "loadFeed(0, done)" (see his direct message to me on
        // 2019-06-24 at 1:34 PM PDT).  Second, again on 2019-06-25, after I thought I had
        // fixed the beforeEach() block, I wrote to Peter J. again about problems I was
        // having with the it() block (see below).  In addition to answering my question
        // about the it() block, Peter J. also helpfully pointed out that it was not
        // necessary for me to call done() in the beforeEach block, because I was already
        // passing it in as an argument.  I benefitted greatly from both of these suggestsions.
        // (See also his direct message to me on 2019-06-24 at 11:06 PM PDT.)
        beforeEach(function(done){

            loadFeed(0, done);
         });
        // Based upon prior test, above,
        // Also based on prior UDAC material, specifically AddressBookSpec.js, and
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
        // Consulted 2019-06-22 and 2019-06-24
        // Also based upon
        // https://jasmine.github.io/tutorials/async
        // Consulted 2019-06-23
        // Also based upon
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
        // Consulted 2019-06-25
        // NOTE-JK-2019-06-25: This it() method is further based upon
        // a specific suggestion from Udacity mentor Peter J.  On 2019-06-24,
        // after I had exhausted my ideas for modifying it(), which basically
        // focused on using querySelector(), as follows:

        //     it('at least one .entry element in .feed container.', function(done) {

        //         const feedDiv = document.querySelector('.feed');
        //         const entryElement = (document.querySelector('.feed')).querySelector('.entry');
        //         console.log(feedDiv);
        //         console.log(entryElement);
        //         expect(entryElement).toBeDefined();
        //         expect(entryElement.length).not.toBe(0);
        //         done();
        //     });

        // I wrote to Peter J., and he again very helpfully suggested using
        // querySelectorAll() and passing in multiple selectors, and he also provided
        // a helpful reference:

        //     "I can see that you are using querySelector method and then calling a
        //     length method on it, which most likely returns undefined. Try using
        //     document.querySelectorAll('.parent .child') which should give you
        //     array of element that it found.

        //     https://stackoverflow.com/questions/24090270/
        //     how-can-i-test-that-a-value-is-greater-than-or-equal-to-in-jasmine/36577913"

        // (See also his direct message to me on 2019-06-24 at 11:06 PM PDT.) His
        // suggestion worked immediately.
        it('at least one .entry element in .feed container.', function(done) {
            let parentAndChildElements = document.querySelectorAll('.feed .entry');
            // console.log(parentAndChildElements);
            expect(parentAndChildElements).toBeDefined();
            expect(parentAndChildElements.length).not.toBe(0);

            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
    /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // Based upon a specific suggestion from Udacity mentor Peter J.
        // made on 2019-06-26, described in further detail below.
        // Also based upon two articles suggested by Peter J., referenced again below:
        // https://www.dashingd3js.com/lessons/javascript-callback-functions
        // https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff
        // consulted 2019-06-28

        let feedArray = [];
        let feedElements0;
        let feedElements1;

        // NOTE-JK-2019-06-28: This it() method is based upon
        // a specific suggestion from Udacity mentor Peter J.  On 2019-06-28,
        // after I had exhausted my ideas for modifying it(), which basically
        // focused on calling it() twice, with two different loadFeed() methods
        // (e.g., loadFeed(x, done) followed by loadFeed(y, done),
        // where x and y are two different integers between 0-3), I wrote to
        // Peter J., (A) describing the key part of my code as follows:

        //     it('loading 1st feed.', function(done) {
        //         loadFeed(0, done);
        //         feedElements0 = document.querySelector('.entry');
        //         feedArray.push(feedElements0);
        //         console.log(feedArray);
        //         expect(feedElements0).toBeDefined();
        //         expect(feedElements0).toBe(feedElements0);
        //         expect(feedElements0).not.toBe(feedElements3);
        //         // done();
        //     });

        //     it('loading 4th feed.', function(done) {
        //         loadFeed(3, done);
        //         let feedElements3 = document.querySelector('.entry');
        //         feedArray.push(feedElements3);
        //         console.log(feedArray);
        //         expect(feedElements3).toBeDefined();
        //         expect(feedElements3).toBe(feedElements3);
        //         expect(feedElements3).not.toBe(feedElements0);
        //         // done();
        //     });

        // and (B) further describing the key problem that I was seeing in the output;

        //     The output is particularly odd because:

        //         The two arrays (as shown in the two screen shots) are identical
        //         (you can see they reference the same "AI Training" post in the
        //             innerText property); and

        //         All of the specs pass, including the specs in which the two array
        //         elements should be different,

        //         expect(feedElements0).not.toBe(feedElements3); ....
        //         expect(feedElements3).not.toBe(feedElements0);

        // After I wrote to him, Peter J., once again, wrote back and very helpfully
        // suggested calling loadFeed() itself the second time as the callback
        // function that could be passed into loadFeed() when it was first called:

        //     Hi John, In the last test suite. You need to call loadFeed method
        //     twice and asynchronously. We know that loadFeed takes a 2nd argument,
        //     which is a function that will execute once the feeds have been received
        //     from the server. You can take advantage of that and call loadFeed again
        //     within your callback method.

        //     You would implement it somewhat similar to this

        //         loadFeed(0, function() {
        //             loadFeed(1,  done)
        //         })

        //     ....

        //     He also generously directed me to some relevant articles:

        //         I found a few articles that will hopefully help you understand
        //         how javascript handles callbacks and asynchronous code execution

        //         https://www.dashingd3js.com/lessons/javascript-callback-functions
        //         https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

        // (See also his direct message to me on 2019-06-26 at 9:43 AM PDT.) It took me
        // a little time to figure out how to implement his suggestion, but, once I had
        // experimented a bit with the sequence of relevant expectations, his
        // suggestion led to the test suite working properly.

        it('loads from 1st and 2nd feeds are different.', function(done) {
            loadFeed(0, function () {
                loadFeed(1, done)
                    let feedElements1 = document.querySelector('.entry');
                    feedArray.push(feedElements1);
                    console.log("feedArray-1" + feedArray);
                    expect(feedElements1).toBeDefined();
                    expect(feedElements1).toBe(feedElements1);
                    expect(feedElements0).not.toEqual(feedElements1);
                    expect(feedElements1).not.toEqual(feedElements0);
                });
                feedElements0 = document.querySelector('.entry');
                feedArray.push(feedElements0);
                console.log("feedArray-0" + feedArray);
                expect(feedElements0).toBeDefined();
                expect(feedElements0).toBe(feedElements0);
        });
    });
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
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://jasmine.github.io/tutorials/async
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// consulted 2019-06-22

// https://jasmine.github.io/tutorials/async
// https://www.techiediaries.com/jasmine-testing-tutorial/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// https://stackoverflow.com/questions/41722621/es6-in-the-browser-uncaught-syntaxerror-unexpected-token-import/45745913
// consulted 2019-06-23

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
// Consulted 019-06-24

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// Consulted 2019-06-25

// Two specific direct messates from Udacity mentor Peter J.
// Consulted on 2019-06-24 and 2019-06-25

// https://stackoverflow.com/questions/24090270/
// how-can-i-test-that-a-value-is-greater-than-or-equal-to-in-jasmine/36577913
// https://jasmine.github.io/api/3.4/matchers
// Consulted on 2019-06-25

// https://www.dashingd3js.com/lessons/javascript-callback-functions
// https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff
// consulted 2019-06-28



