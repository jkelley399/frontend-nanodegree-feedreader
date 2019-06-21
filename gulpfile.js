/*eslint-env node */

// UDAC Project: Feed Reader Testing

// Based on
// https://gulpjs.com/docs/en/api/src#errors
// https://github.com/gulpjs/vinyl-fs/issues/292
// https://evanhahn.com/disable-eslint-for-a-file/
// https://packagecontrol.io/docs/usage
// http://www.storybench.org/install-babel-packages-sublime-text-3/
// https://nodejs.org/en/
// https://gulpjs.com/docs/en/getting-started/quick-start
// https://css-tricks.com/gulp-for-beginners/
// https://gulpjs.com/
// https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md
// https://packagecontrol.io/packages/SublimeLinter
// https://packagecontrol.io/packages/SublimeLinter-eslint
// https://eslint.org/docs/user-guide/getting-started
// https://www.youtube.com/watch?time_continue=258&v=hppJw2REb8g
// https://eslint.org/
// https://eslint.org/docs/user-guide/getting-started
// http://www.sublimelinter.com/en/latest/
// https://github.com/SublimeLinter/SublimeLinter-eslint
// https://eslint.org/docs/user-guide/getting-started
// https://www.npmjs.com/package/gulp-eslint#usage
// https://www.npmjs.com/package/gulp-babel
// https://www.npmjs.com/package/jasmine
// https://bytearcher.com/articles/ways-to-get-the-latest-node.js-version-on-a-mac/
// consulted 2019-06-21
// https://www.npmjs.com/package/@babel/core
// https://babeljs.io/docs/en/babel-register
// consulted 2019-06-20
// https://gulpjs.com/docs/en/getting-started/creating-tasks#exporting
// https://github.com/jasmine/jasmine-npm/issues/145
// https://github.com/jasmine/jasmine-npm/issues/145#issuecomment-437613065
// https://jasmine.github.io/setup/nodejs.html
// https://stackoverflow.com/questions/51069142/whats-the-difference-between-uglify-js-and-uglify-es
// consulted 2019-06-18 and also
// https://www.sitepoint.com/automate-css-tasks-gulp/
// https://gulpjs.com/docs/en/getting-started/quick-start
// https://gulpjs.com/docs/en/getting-started/creating-tasks
// https://gulpjs.com/docs/en/getting-started/async-completion
// consulted 2019-06-17 as well as the Udacity course materials
// https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5831481034/concepts/55096392250923
// https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5876358842/concepts/53738292320923

//                    NOTE: Corresponding package.json shown in comments at bottom

// configuration

// modules

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
// NOTE: in sitepoint post above, this next line is given as
//             browsersync     = devBuild ? require('browser-sync').create() : null;
//             but for right now, I'm sticking with the Udacity syntax
// NOTE: sitepoint post also says:
//             "The browser-sync test server can now be installed — as a development
//             dependency, since it should never be required on a live production
//             device:"
const jasmineBrowser = require('gulp-jasmine-browser');
const babel = require('gulp-babel');

// possible future modules --- from UDAC course material
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps');
// const imagemin = require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');

function css() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function copyHTML() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

function scripts() {
    return gulp.src('js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
}

function scriptsDist() {
    return gulp.src('js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
}

function lint() {
    return gulp.src('js/**/*.js')
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
}

// runs tests to terminal; use either this or the alternative below
// function tests() {
//     return gulp.src('tests/spec/extraSpec.js')
//         .pipe(jasmineBrowser.specRunner({ console: true }))
//         .pipe(jasmineBrowser.headless({ driver: 'chrome' }));
// }

// ALTERNATIVE: runs tests to browser
// In Gulp 4, need to add a parameter to allow a directory to be empty
// See:  https://gulpjs.com/docs/en/api/src#errors
//       https://github.com/gulpjs/vinyl-fs/issues/292
function tests() {
    return gulp.src('tests/spec/*.js', {allowEmpty: true}) //TODO: Need to change this
        .pipe(jasmineBrowser.specRunner())    //TODO: May need to change this
        .pipe(jasmineBrowser.server({ port: 3001 }));
}

//    NOTE done() here seems to as as a completion call back
//    see: https://gulpjs.com/docs/en/getting-started/async-completion
//    section: https://gulpjs.com/docs/en/getting-started/async-completion#using-an-error-first-callback

function watch () {
    browserSync.init({server: './dist'});
    gulp.watch('sass/**/*.scss', gulp.series(css));
    gulp.watch('js/**/*.js', gulp.series(lint));
    gulp.watch('/index.html', gulp.series(copyHTML));
}

// the exports.default method seems to make this the Gulp default
//     See: sitepoint post in "Automating Your Workflow" section
exports.tests = tests;
exports.scripts = scripts;
exports.dist = gulp.series(copyHTML, css, scriptsDist, watch);
exports.default = gulp.series(copyHTML, css, lint, tests, scripts, watch);

// TODO:
// 1.    Need to sort out the dependencies regarding Babel.

// COMMENTS
// Corresponding package.json

// DRAFT OF README.md

// INSTALLATION REQUIREMENTS

// Note: Unless otherwise indicated, most of this is based upon the lessons
// "Productive Editing," "Powerful Builds," "Expressive Line Editing,"
// "How to Prevent Disasters," and "Awesome Optimizations" in the
// Udacity Front-End Web Developer Nanodegree Program module,
// "6. JavaScript Tools & Testing," beginning at:
// https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5824421053/concepts/53224206220923

// Dependencies

// Sublime Text 3: http://www.sublimetext.com/
// Package Control for Sublime Text 3: https://packagecontrol.io/installation
// Installing packages in Sublime Text 3, both generally and using
//     the Sublime Babel package as an example:
//     https://packagecontrol.io/docs/usage
//     http://www.storybench.org/install-babel-packages-sublime-text-3/

// General note: most of the following commands will be executed in
//     your terminal.

// Node.js
// Check to see if it's already installed: node -v
// If not, install from Node's official site:
//     https://nodejs.org/en/
// If you're on a Mac and want to consider some alternative means of
//     installing Node, this post gives an overview of different techniques:
//     https://bytearcher.com/articles/ways-to-get-the-latest-node.js-version-on-a-mac/

// npm
// Should be installed with Node.js.
// Check current version: npm -v
// Frequently updated, so go ahead and update:
//     -update locally: npm update
//     -update globally: npm install -g npm

// Install Gulp
//     npm install --g gulp-cli

// For more on Gulp generally, see:

//     https://gulpjs.com/docs/en/getting-started/quick-start
//     https://css-tricks.com/gulp-for-beginners/

// Be sure you're in the root of your project, and then create package.json:

//     npm init

// That command will ask some questions and lead to the creation of the
//     package.json file

// Make Gulp a development dependency (one of the "devDependencies")
//     in package.json (again, be sure you're in your project root):

//     npm install --save-dev gulp

//     To confirm installation, run gulp -v again.
//         NOTE: For this particular implementation, I'm using Gulp 4.0.2

//     For more informaiton on Gulp and Gulp's API, see:
//         https://gulpjs.com/
//         https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md

// Install the other Gulp dependencies required in gulfile.js
//     using the same npm techniques, making sass, autoprefixer,
//     and eslint additional devDependencies (once more, be sure
//         you're in your project root):

//         npm install --save-dev gulp-autoprefixer
//         npm install --save-dev jasmine

//         npm install gulp-sass
//         npm install gulp-eslint
//         npm install browser-sync
//         npm install gulp-jasmine-browser
//         npm install --save-dev gulp-babel @babel/core @babel/preset-env

// Note: The following section on eslint is based almost exclusively
// on the lesson, "How to Prevent Disasters," in the
// Udacity Front-End Web Developer Nanodegree Program module,
// "6. JavaScript Tools & Testing," beginning at part 3, "Linting":

//     https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5876358842/concepts/53738292220923

// To use eslint with Sublime Text 3, you will need to install two
//     different Sublime packages (you will do this inside Sublime Text 3):

//         SublimeLinter, which lacks specific language linters:
//             https://packagecontrol.io/packages/SublimeLinter

//         SublimeLinter-eslint, which connects eslint to SublimeLinter:
//             https://packagecontrol.io/packages/SublimeLinter-eslint

//         For a refresher on installing Sublime Text 3 packages, please
//             see these again:
//             https://packagecontrol.io/docs/usage
//             http://www.storybench.org/install-babel-packages-sublime-text-3/

// Next, you must configure eslint.    Return to the terminal, make sure you're
//     in your project root, and give the following command to generate
//     the basic eslint configuration:

//         eslint --init

// Eslint will ask you a series of questions to determine the rules that
//     will be enforced when you are editing a file in Sublime Text 3.    Among
//     other things, you can choose this option:

//         "Use a popular style guide"

//     For example, you might choose the "Google" option and end up with
//         the following in your package.json file:

//         "eslint-config-google": "^0.13.0",

// When you are finished, eslint will create an .eslintrc file inside your
//     project directory that will specify the set of rules to be followed.

// Sometimes you may wish to exclude a file from ESLint, e.g., in this project
//   the principal js file, app.js, contains a number of things, such as:

//       $.ajax...

//       and the Google API

//       google.setOnLoadCallback(init);

//   that my configuration of ESLint did not appreciate.  To fix these types of problems,
//   use /* eslint-disable */ as the first comment at the top of the file.

//     See: https://evanhahn.com/disable-eslint-for-a-file/

// For more details on how to configure ESlint, see:
//     https://eslint.org/docs/user-guide/getting-started

//     In particular, you might want to pay special attention to the
//         discussion beginning at approximately 4:00 of the "Getting
//            Started Tutorial" video, which is also available on YouTube at:
//             https://www.youtube.com/watch?time_continue=258&v=hppJw2REb8g

// If you open this file, you will see the rules that you have specified.
//     Among the most important is the final one,

//         "extends": "eslint:recommended"

//     This rule makes clear that the preceding rules modify eslint's own
//         recommended rules.

// Because this project is intended to run under node, gulpfile.json
//     has a comment at the top of the file,

//         /*eslint-env node */

//     that notifies eslint only to turn off Node.js warnings in this file.
//     This type of comment works like a configuration setting, but it is
//     located in and only affects the file in which it is placed.

// For more information on ESLint, SublimeLinter, and
//     SublimeLinter-eslint see:
//         https://eslint.org/
//         https://eslint.org/docs/user-guide/getting-started
//         http://www.sublimelinter.com/en/latest/
//         https://github.com/SublimeLinter/SublimeLinter-eslint

// For other informaiton on configuring ESLint, including how to
//     install it globally and the use of a configuration file, see:
//         https://eslint.org/docs/user-guide/getting-started

// For more information on using gulp with ESLint, see:
//     https://www.npmjs.com/package/gulp-eslint#usage

// Having completed these steps, your package.json file should have
//     have these dependencies and devDependencies:

//     TODO

// And, depending on the styles that you have chosen, your .eslintrc.json
//     file, in this case a json file, might possibly look something
//     like this (although there can be considerable variation, depending
//     on the options that you have selected):

//     TODO

// To run Gulp, choose one of the different command options specified
//     in gulpfile.js, i.e.:

//     the Gulp default option:
//         gulp

//     the Gulp tests option:
//         gulp tests

//     the Gulp scripts option:
//         gulp scripts

//     the Gulp distribution option:
//         gulp dist



