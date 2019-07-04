/*eslint-env jasmine, jquery */
// Above based on
// https://eslint.org/docs/user-guide/configuring
// https://eslint.org/docs/user-guide/configuring#specifying-environments
// Consulted 2019-07-03

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

// UDAC Project: Feed Reader Testing
// Following line re disabling eslint on next line based on:
// https://stackoverflow.com/questions/27732209/turning-off-eslint-rule-for-a-specific-line
// https://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments
// Consulted on 2019-07-04
// eslint-disable-next-line
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

        it('and all their names are defined and non-empty', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect((feed.name).length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {
        // This behavior is controlled by index.html in the body element.
        // Based upon feedback received from an anonymous Udacity reviewer
        // on 2019-07-02, this test has been revised substantially, and the new
        // test is from the express implementation suggestion in that feedback.
        // (Besides the reviewer's suggested code., perhaps the most important thing I
        // learned from the feedback in the present context was this:
        // "Since the project uses jQuery as a dependency it can be used also with
        // testing, for instance you can make use of jQuery selector and hasClass method"
        // The specific implementation below is the reviewer's suggested code:
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        // This behavior is controlled by app.js in menuIcon.on.
        // TODO-JK: Another approach to this test might be to use
        // the [jasmine-jquery extension](https://github.com/velesin/jasmine-jquery),
        // which seems to be available [using npm](https://www.npmjs.com/package/jasmine-jquery),\
        // and [through a cdn](https://www.jsdelivr.com/package/npm/jasmine-jquery).
        // In particular, the [Jasmine cheatsheet](https://devhints.io/jasmine)
        // has a section, "Event spies," that suggests how one might instead spy
        // on the click events to which menuIcon.on in app.js responds.

        // Based upon feedback received from an anonymous Udacity reviewer
        // on 2019-07-02, this test has been revised substantially, and the new
        // test is from the express implementation suggestion in that feedback.
        // (Besides the reviewer's suggested code., perhaps the most important thing I
        // learned from the feedback in the present context was the continued
        // suggestion to use jQuery in writing the test:

        //     "Using jQuery
        //     $('.menu-icon-link').click()"

        // See also the above comment on the prior test.
        // The specific implementation below is the reviewer's suggested code:

        it('changes visibly when menu icon clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // 2019-06-25: Now working based on Udacity mentor Peter J.'s help
    describe('Initial Entries', function() {
        // Based upon prior test, above,
        // Also based on prior UDAC material, specifically AddressBookSpec.js, and
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/
        // querySelector
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
        // Global_Objects/Array/includes
        // Consulted 2019-06-22
        // Also based upon
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
        // Following line re disabling eslint on next line based on:
        // https://stackoverflow.com/questions/27732209/turning-off-eslint-rule-for-a-specific-line
        // https://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments
        // Consulted on 2019-07-04
        // eslint-disable-next-line
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
        // NOTE-JK-2019-07-04: Old code follows, refactored below, being kept for
        // educational reference, to facilitate comparison, at present
        // it('at least one .entry element in .feed container.', function(done) {
        //     let parentAndChildElements = document.querySelectorAll('.feed .entry');
        //     // console.log(parentAndChildElements);
        //     expect(parentAndChildElements).toBeDefined();
        //     expect(parentAndChildElements.length).not.toBe(0);

        //     done();
        // });

        // Refactored based upon feedback received from an anonymous Udacity reviewer
        // on 2019-07-02, this test has been revised substantially, and the new
        // test is from the express implementation suggestion in that feedback.
        // (Besides the reviewer's suggested code., perhaps the two most important things I
        // learned from the feedback in the present context were the reviewer's:
        // (a) comment about the scope of Document:
        //  "done callback function is not necessarily in the it function scope, only in the
        //  beforeEach function scope, but the test works correctly :+1:, you can simplify
        //  the code"
        //  (b) continuing suggestion to use jQuery in writing the test
        // See also the above comments regarding suggestions from the reviewer.
        // The specific implementation below is the reviewer's suggested code:

        it('at least one .entry element in .feed container.', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    // NOTE-JK-2019-06-30: Testing shows works best with jquery 3.3.1,
    // but that repeated reloads of page frequently produce different
    // results

    describe('New Feed Selection', function() {
        // Originally based upon a specific suggestion from Udacity mentor Peter J.
        // made on 2019-06-26, described in further detail below.
        // Originally also based upon two articles suggested by Peter J., referenced again below:
        // https://www.dashingd3js.com/lessons/javascript-callback-functions
        // https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff
        // consulted 2019-06-28
        let feedElements0;
        let feedElements1;

        // Refactored based upon feedback received from an anonymous Udacity reviewer
        // on 2019-07-02.  beforeEach has been added and implemented
        // based on the express implementation suggestion in that feedback.
        // (Besides the reviewer's suggested code., perhaps the two most important things I
        // learned from the feedback in the present context were the reviewer's:
        // (a) comments the sequence for assigning one of the variables in relationship
        // to calling loadFeed() and using the beforeEach() function:

        //     "...but you must assign the variable feedElements0 before invoking
        //     the second loadFeed and all these should be processed inside
        //     beforeEach function"

        //  (b) continuing suggestion to use jQuery in writing the test
        // See also the above comments regarding suggestions from the reviewer.
        // The specific implementation below is the reviewer's suggested code:

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedElements0 = $('.feed').html();
                loadFeed(1, function() {
                    feedElements1 = $('.feed').html();
                    done();
                });
            });
        });

        // Originally this it() method was based upon
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

        // Refactored based upon feedback received from an anonymous Udacity reviewer
        // on 2019-07-02.  After adding the beforeEach() function above
        // based on the express implementation suggestion in that feedback,
        // the it() function has been bastly simplified, in keeping with the reviewer's
        // comment, "some lines of the code are unnecessary...."  In addition, I
        // learned from seeing how the reviewer had eliminated the "done" parameter
        // in the it() function.  The specific implementation below is the reviewer's
        // suggested code.

        it('loads from 1st and 2nd feeds are different.', function() {
            expect(feedElements1).not.toEqual(feedElements0);
        });
    });
}());

// ADDITIONAL REFERENCES CONSULTED

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

// https://cdnjs.com/libraries/jquery/  //for updating to 3.4.1.
// https://cdnjs.com/libraries/jasmine/
// https://jasmine.github.io/pages/getting_started.html
// https://codeburst.io/switching-to-gulp-4-0-271ae63530c0
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function
// consulted 2019-06-30

// https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5876358842/concepts/53738292280923
// https://github.com/jasmine/gulp-jasmine-browser
// https://jasmine.github.io/pages/getting_started.html
// https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5861830171/concepts/53272908270923
// https://www.guru99.com/node-js-testing-jasmine.html
// https://jasmine.github.io/setup/nodejs.html#configuration
// https://developers.google.com/chart/interactive/docs/basic_load_libs
// https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
// consulted 2019-07-01

// Multiple specific, detailed suggestions, including specific code,
// provided by anonymous Udacity review in 2019-07-02 code review
// Consulted on 2019-07-03 and 2019-07-04

// https://eslint.org/docs/user-guide/configuring
// https://eslint.org/docs/user-guide/configuring#specifying-environments
// https://stackoverflow.com/questions/53659193/how-do-i-tell-eslint-that-another-file-is-included-before-the-current-one
// https://stackoverflow.com/questions/27732209/turning-off-eslint-rule-for-a-specific-line
// https://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments
// https://www.npmjs.com/package/puppeteer
// https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development#toc-using-browsersync
// Consulted on 2019-07-04


