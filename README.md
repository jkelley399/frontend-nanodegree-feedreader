# Feed Reader Testing Project

## Introduction
This project is being submitted in connection with part 6, "JavaScript Tools & Testing," of the Udacity Front-End Web Developer Nanodegree.   *See*: ["Project: Feed Reader Testing, Project Overview"](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/85de54c3-1646-44c5-9d81-228c05d9f3fc/lessons/3442558598239847/concepts/34347387230923).  The implementation of this project is based upon the starter code.  *See*: ["udacity/frontend-nanodegree-feedreader"](https://github.com/udacity/frontend-nanodegree-feedreader).  No additional functionality has been developed to date.

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Instructions](#instructions)
    - [Project Instructions](#project-instructions)
    - [Dependencies and Requirements](#dependencies-and-requirements)
        - [Dependencies](#dependencies)
        - [Requirements](#requirements)
            - [Hardware and Browser](#hardware-and-browser)
            - [Sublime Text 3](#sublime-text-3)
            - [Node.js](#node)
            - [Gulp](#gulp)
            - [ESLint](#eslint)
    - [How to Run the Application](#how-to-run-the-application)
        - [Running Locally](#running-locally)
        - [Not Currently Running on GitHub Pages](#not-currently-running-on-github-pages)
- [Known Bugs or Implementation Problems](#known-bugs-or-implementation-problems)
- [Starting Points and References](#starting-points-and-references)
- [TODO](#todo)

## Instructions

### Project Instructions
For detailed instructions, *see*:
- ["Instructions"](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/85de54c3-1646-44c5-9d81-228c05d9f3fc/lessons/3442558598239847/concepts/34300788080923)
- ["PROJECT SPECIFICATION, Feed Reader Testing, a/k/a, "FeedReader Testing Project Rubric"](https://review.udacity.com/#!/rubrics/18/view), and
- ["Project Submission" information](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/85de54c3-1646-44c5-9d81-228c05d9f3fc/lessons/3442558598239847/project).

### Dependencies and Requirements

#### Dependencies

The project dependencies are:

- in index.html,
    - [Roboto fonts](https://fonts.googleapis.com/css?family=Roboto:400,100,300,700)
        - *see also*: https://fonts.google.com/specimen/Roboto
    - various Jasmine libraries
        - [jasmine.min.css](https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.min.css)
        - [jasmine-html.min.js](https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.min.js)
        - [boot.min.js](https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.min.js)
        - *see also*: https://jasmine.github.io/
    - [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js)
        - *see also*: https://jquery.com/
    - [Handlebars](https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js)
        - *see also*: https://handlebarsjs.com/, and
    - [Google library loader](http://google.com/jsapi)
        - *see also*: https://developers.google.com/chart/interactive/docs/basic_load_libs (and search for "jsapi")

NOTE: Most of these are added to the project through [CDNs](https://en.wikipedia.org/wiki/Content_delivery_network).

#### Requirements

##### Hardware and Browser

This project requires a computer with a keyboard, and preferably a mouse or other pointing device, and a relatively up-to-date browser.  To date, this project has been tested primarily on Chrome Version 75.0.3770.100 (Official Build) (64-bit).

Most of the other requirements for the project relate to build tools for the testing and automation environment that must be installed, generally by using the terminal (or equivalent) operating system command.  Begin by creating a new project root directory.  Then, if not previously installed, begin installing the following build tools in that directory.

- PLEASE NOTE: Alternatively, some of these tools, *e.g.* Sublime Text 3 may already have been installed or may easily be installed globally.  The suggestion that all of the build tools be installed in the project directory is simply intended to facilitate installation in a compartmentalized manner.

##### Sublime Text 3

- [Sublime Text 3](http://www.sublimetext.com/)
- [Package Control for Sublime Text 3](https://packagecontrol.io/installation)
- Installing packages in Sublime Text 3, both generally and using the Sublime Babel package as an example:
    - https://packagecontrol.io/docs/usage
    - http://www.storybench.org/install-babel-packages-sublime-text-3/

##### Node

[Node.js](https://nodejs.org/en/)
- Check to see if it's already installed:
    - In terminal
        - `node -v`
- If not, install from [Node's official site in English](https://nodejs.org/en/)
- If you're on a Mac and want to consider some alternative means of
    installing Node, [this post gives an overview of different techniques](https://bytearcher.com/articles/ways-to-get-the-latest-node.js-version-on-a-mac/)

##### npm

- npm should be installed with Node.js.
- Check current version:
    - In terminal
        - `npm -v`
- npm is frequently updated, updating it is recommended:
    -Update locally:
        - In terminal
            - `npm update`
    Update globally:
        - In terminal
            - `npm install -g npm`

##### Gulp

Having installed Node.js and npm, it is now possible to install Gulp and other build tools that can be added to the environment using npm.

- First, make sure that you're in the root of your project, and create `package.json`:

    - `npm init`

That command will ask some questions and then create the `package.json`.

- Again, after confirming that you're in your project root, install Gulp and simultaneously make Gulp a development dependency (one of the "devDependencies") in `package.json`

    - In terminal
        - `npm install --save-dev gulp`

    - To confirm installation, in terminal, run:
        -   `gulp -v`
    - NOTE: For this particular implementation, Gulp 4.0.2 is used.

    - For more information on Gulp and Gulp's API, *see*:
        - https://gulpjs.com/
        - https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md

- Alternatively, you can install Gulp globally and then separately (and not shown) make Gulp a development dependency in `package.json`

    - In terminal

        - `npm install --g gulp-cli`

- For more on installing Gulp, see:

    - [Gulp getting started docs](https://gulpjs.com/docs/en/getting-started/quick-start)
    - [CSS Tricks introductory Gulp post](https://css-tricks.com/gulp-for-beginners/)

- Next, install the other Gulp dependencies required using the same npm techniques, making autoprefixer and eslint additional devDependencies (once more, be sure (a) you're in your project root and (b) using terminal):

```
npm install --save-dev gulp-autoprefixer`
npm install --save-dev jasmine`
npm install --save-dev gulp-babel @babel/core @babel/preset-env`

npm install gulp-sass`
npm install gulp-eslint`
npm install browser-sync`
npm install gulp-jasmine-browser`
npm install --save-dev gulp-babel @babel/core @babel/preset-env`
```
Having completed these steps, your `package.json` file should have have these dependencies and devDependencies:

```{
  "name": "frontend-nanodegree-feedreader",
  "version": "1.0.0",
  "description": "In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jkelley399/frontend-nanodegree-feedreader.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/jkelley399/frontend-nanodegree-feedreader/issues"
  },
  "homepage": "https://github.com/jkelley399/frontend-nanodegree-feedreader#readme",
  "devDependencies": {
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^6.1.0",
    "gulp-babel": "^8.0.0",
    "jasmine": "^3.4.0"
  },
  "dependencies": {
    "browser-sync": "^2.26.7",
    "gulp-eslint": "^5.0.0",
    "gulp-jasmine-browser": "^4.1.0",
    "gulp-sass": "^4.0.2"
  }
}
```

##### ESLint

- PLEASE NOTE: This section on ESLint is based almost exclusively
on the lesson, "How to Prevent Disasters," in the
Udacity Front-End Web Developer Nanodegree Program module,
"6. JavaScript Tools & Testing," beginning at part 3, ["Linting"](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5876358842/concepts/53738292220923)

- To use ESLint with Sublime Text 3, you will need to install two different Sublime packages (you will do this inside Sublime Text 3):

    - SublimeLinter, which lacks specific language linters:
        - https://packagecontrol.io/packages/SublimeLinter

    - SublimeLinter-eslint, which connects ESLint to SublimeLinter:
        - https://packagecontrol.io/packages/SublimeLinter-eslint

    - For a refresher on installing Sublime Text 3 packages, please see these again:
        - https://packagecontrol.io/docs/usage
        - http://www.storybench.org/install-babel-packages-sublime-text-3/

- Next, you must configure ESLint.    Return to the terminal, make sure you're
    in your project root, and give the following command to generate
    the basic ESLint configuration:

    - `eslint --init`

- ESLint will ask you a series of questions to determine the rules that will be enforced when you are editing a file in Sublime Text 3.

    - Among other things, you can choose this option:

        - "Use a popular style guide"

    - For example, you might choose the "Google" option and end up with the following in your package.json file:

        - `"eslint-config-google": "^0.13.0"`

- When you are finished, ESLint will create a configuration file (which, it is believed, will be inside your `eslint` directory or a subdirectory of that directory) that will specify the set of rules to be followed.

- As noted in ["Configuring ESLint"](https://eslint.org/docs/2.0.0/user-guide/configuring), the ESLint configuration files can take different forms:

> Configuration Files - use a JavaScript, JSON or YAML file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of an `.eslintrc.*` file or an `eslintConfig` field in a `package.json` file, both of which ESLint will look for and read automatically, or you can specify a configuration file on the command line.

- For additional information regarding ESLint configuration file formats, *see*: https://eslint.org/docs/user-guide/configuring#configuration-file-formats

- If you open the ESLint configuration file, you will may see rules that you have specified.  Sometimes, among the most important, may be the final rule:

    - `"extends": "eslint:recommended"`

        - This type of rule would make clear that preceding rules modify ESLint's own recommended rules.

- Sometimes you may wish to exclude a file from ESLint, e.g., in this project, the principal js file, `app.js`, contains a number of statements to which ESLint, as commonly configured, might object, such as:

    - `$.ajax`...

    - the Google API

        - `google.setOnLoadCallback(init);`

- Instead of modifying the configuration of ESLint, one can alternatively choose to keep ESLint from parsing a particular file by using `/* eslint-disable */` as the first comment at the top of the appropriate file.
    - *See*: https://evanhahn.com/disable-eslint-for-a-file/

- Alternatively, one can configure ESLint not to produce certain kinds of warnings by understanding the environment in which a file will run.  For example, because this project is intended to run under node, gulpfile.json has a comment at the top of the file,

        /*eslint-env node */

    -   That statement notifies ESLint to turn off Node.js warnings in this file.  While this type of comment acts like a configuration setting, it is
    located in and only affects the file in which it is placed.

        - *See also*: https://eslint.org/docs/user-guide/configuring#specifying-environments

- For more details on how to configure ESlint, *see also*:
    - https://eslint.org/docs/user-guide/getting-started

        - In particular, you might want to pay special attention to the discussion beginning at approximately 4:00 of the ["Getting Started Tutorial" video, which is also available on YouTube](https://www.youtube.com/watch?time_continue=258&v=hppJw2REb8g)

- For more information on ESLint, SublimeLinter, and SublimeLinter-eslint, *see*:
    - https://eslint.org/
    - https://eslint.org/docs/user-guide/getting-started
    - http://www.sublimelinter.com/en/latest/
    - https://github.com/SublimeLinter/SublimeLinter-eslint

- For other information on configuring ESLint, including how to install it globally and the use of a configuration file, *see*:
    - https://eslint.org/docs/user-guide/getting-started

- For more information on using gulp with ESLint, *see*:
    - https://www.npmjs.com/package/gulp-eslint#usage

### How to Run the Application

- At present, the project must be installed locally to run.
- After installing all of the required build tools, proceed to download the project code from GitHub.

#### Running Locally

- After you have created the project environment by installing all of the required build tools, you will need to download the project code from GitHub:

    - navigate to the [main repository page on GitHub](https://github.com/jkelley399/frontend-nanodegree-feedreader);
    - clone or download the repository; and
    - install the cloned or downloaded repository locally in the project directory root that you created previously.

- Once the project code has been downloaded from GitHub into the project directory root, run the application by using Gulp in the terminal:

    - open a suitable browser
        - *see* [Hardware and Browser](#hardware-and-browser), above
    - preferably open a new "Incognito" window (if you are using Chrome), or some similar window in a different browser
    - enter the terminal
    - within the terminal, connect to the proper directory, *i.e.*, the project root, which should contain `gulpfile.js`
    - then, to run Gulp, choose one of the different command options specified
    in `gulpfile.js`, *i.e.*:

         - the Gulp default option:
             - `gulp`

         - the Gulp tests option:
            - `gulp tests`

         - the Gulp scripts option:
            - `gulp scripts`

         - the Gulp distribution option:
            - `gulp dist`

- In most instances, the default option, `gulp`, will be appropriate.

- For example, in the macOS operating system, the sequence of terminal commands to start the application, beginning with connecting to the proper root directory, might look like this and produce the following output in the terminal:

```
$ cd ~/frontend-nanodegree-feedreader
$ gulp
[19:12:51] Using gulpfile ~/frontend-nanodegree-feedreader/gulpfile.js
[19:12:51] Starting 'default'...
[19:12:51] Starting 'copyHTML'...
[19:12:51] Finished 'copyHTML' after 28 ms
[19:12:51] Starting 'css'...
[19:12:51] Finished 'css' after 103 ms
[19:12:51] Starting 'lint'...
[19:12:52] Finished 'lint' after 209 ms
[19:12:52] Starting 'tests'...
[19:12:52] Jasmine server listening on port 3001
[19:12:52] Finished 'tests' after 22 ms
[19:12:52] Starting 'scripts'...
[19:12:52] Finished 'scripts' after 279 ms
[19:12:52] Starting 'watch'...
[Browsersync] Access URLs:
 ----------------------------------------
       Local: http://localhost:3000
    External: http://192.168.168.153:3000
 ----------------------------------------
          UI: http://localhost:3002
 UI External: http://localhost:3002
 ----------------------------------------
[Browsersync] Serving files from: ./dist

```
        - PLEASE NOTE: Certain changes have been made in the directory structure in the above example for simplicity.

- There is a bug in the current implementation that requires additional manual intervention to continue running the application.
    - While Browsersync is serving files from `./dist`, `gulpfile.js` is not properly configured to run the Jasmine test file, `feedreader.js`.
- Therefore, once (a) a suitable browser window is open and (b) Gulp is running, as described above, place the cursor in the address bar of the browser window and open a new file, in this case `index.html` in the root project directory.
    - With the browser window open, opening `index.html` in the address bar should result in the page opening immediately.
- When `index.html` has opened, `feedreader.js` will be triggered, and you should see:
    - the first page produced by app.js, "Udacity Blog," and
    - at the bottom of the page, the output from the Jasmine test suites below a headline
        -in this example, the headline reads,
            `7 specs, 0 failures, randomized with seed 13945'

- The entire page should look like this

![alt text](https://github.com/jkelley399/frontend-nanodegree-feedreader/blob/master/addl_images/markdown/Screen%20Shot%202019-07-01%20at%207.25.48%20PM.png "Screenshot of frontend-nanodegree-feedreader/index.html showing 'Udacity Blog' and output from the Jasmine test suites with headline, `7 specs, 0 failures, randomized with seed 13945' ")

#### Not Currently Running on GitHub Pages

Because I chose to submit the project via GitHub, and because the ["Project Submission" information](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/85de54c3-1646-44c5-9d81-228c05d9f3fc/lessons/3442558598239847/project) stated in part:

> The node_modules directory may contain thousands of files and should not be contained in the submission,

I have not tried to host this project GitHub Pages at this time.

## Known Bugs or Implementation Problems

There are at least two known significant implementation problems, and one additional possible problem, at present:

1.  Variable test results
    1.  Although the application does appear to pass all of the Jasmine test suites, it is not doing so consistently.  Indeed, after considerable testing, the results of the Jasmine test suites appear to depend, at least most of the time, on the order in which they are called by Jasmine.
        1.  Sometimes the application passes on the initial run, and sometimes it fails.
    2.  As presently configured, Jasmine runs the test suites in random order.  When the random setting is on, the application passes all of the test suites, very approximately, 50% of the time.
        1.  For example, running the application initially and then clicking on the reload button adjacent to the address bar in Chrome repeatedly produced 10 sets of results.
        2.  *See* the 10 screenshots arranged chronologically from Screen Shot 2019-07-01 at 1.59.17 PM to Screen Shot 2019-07-01 at 2.00.53 PM inhttps://github.com/jkelley399/frontend-nanodegree-feedreader/tree/master/addl_images/debugging
    3.  On the other hand, if the run test randomly option in Jasmine is turned off, the Jasmine test suites appear to fail fairly consistently.
        1.  *See* the 2 screenshots arranged chronologically from Screen Shot 2019-07-01 at 2.01.12 PM to Screen Shot Screen Shot 2019-07-01 at 2.01.49 PM in https://github.com/jkelley399/frontend-nanodegree-feedreader/tree/master/addl_images/debugging
    4.  Furthermore, the very variability of these test results has made it difficult to debug them.
        1.  For example, changing a line or two and then reloading the page may or may not give correct information about whether the change has been helpful or not.
2.  As discussed above (*see* [Running Locally](#running-locally)), there is a bug in the current implementation that requires additional manual intervention in order to run the application.
    1.  While Browsersync is serving files from `./dist`, it appears that there is some type of configuration error that prevents it from properly running the Jasmine test file, `./jasmine/spec/feedreader.js` automatically.
3.  A third possible implementation problem concerns error handling.
    1.  ["Instructions"](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/85de54c3-1646-44c5-9d81-228c05d9f3fc/lessons/3442558598239847/concepts/34300788080923) states in part:

> Error handling should be implemented for undefined variables and out-of-bound array access

2.  It is unclear what exactly this means in the context of the current project.  Consequently, it is not known whether this submission standard has been met or not.

## Starting Points and References

- The principal starting points and references were described in the [Project Instructions](#project-instructions).

- I am particularly grateful for the considerable assistance that has been provided by Udacity mentor Peter J. three separate times both generally and specifically in connection with two test suites in feedreader.js:

    - In the 'Initial Entries' test suite, with regard to both the beforeEach() method and the it() method, and
    - In the 'New Feed Selection' test suite, with regard to the it() method.
    - For details on the assistance provided, please see the comments in:
        - [feedreader](https://github.com/jkelley399/frontend-nanodegree-feedreader/blob/master/jasmine/spec/feedreader.js) and
        - [gulpfile](https://github.com/jkelley399/frontend-nanodegree-feedreader/blob/master/gulpfile.js)

-Additional materials relied upon are described in the:

    - "ADDITIONAL REFERENCES CONSULTED" section of [gulpfile](https://github.com/jkelley399/frontend-nanodegree-feedreader/blob/master/gulpfile.js) and
    - "ADDITIONAL REFERENCES CONSULTED" section of [feedreader](https://github.com/jkelley399/frontend-nanodegree-feedreader/blob/master/jasmine/spec/feedreader.js)

## TODO

1.  Test and possible fix the testing and automation environment and implementation
    1.  Current ideas include trying the following:
        1.      Install puppeteer (see gulp.js)
        2.      Try initalizing and reconfiguring the testing for Jasmine (see gulp.js)
                    `node node_modules/jasmine/bin/jasmine init`
                    `"scripts": { "test": "jasmine" }`
    2.     Check on modifying the 'New Feed Selection'
                test suite to make the two calls to
                loadFeed(n, cb) IIFEs.  Perhaps that would
                improve the asynchronicity of that test suite.
    3.      Check on adding (a) `/*eslint-env node */` or other
                eslint commands to the top of feedreader.js
                and (b) jQuery part of the 'New Feed Selection'
                test suite.
            1.  Go back and see how elint is configured for
                    feedreader.js.
            2.  Perhaps jQuery $() could also be used to
                improve the asynchronicity of the 'New Feed Selection'
                test suite.
    4.  Try to find the proper location for `jasmine.json`.
        1.  It is currently in `./jasmine/spec/support`, but it
            is far from clear that that directory is the proper
            location.  On the other hand, *see*:
            1.  ["Node.js Unit Testing Tutorial with
            Jasmine"](https://www.guru99.com/node-js-testing-jasmine.html)
            2.  ["Using Jasmine with node" in the "Configuration"
            section](https://jasmine.github.io/setup/nodejs.html#configuration)
2.  Once the testing environment is working better, consider:
    1.  updating the dependencies in index.html, e.g.
        1.  Jasmine
        2.  jQuery
    2.  expanding the 'New Feed Selection' test suite with nested
            for loops.  *See*
                [commit222etc]
                (https://github.com/jkelley399/frontend-nanodegree-feedreader/commit/222f8c2a518f1fd980f9ff4482073e28b745476d#diff-f678b4a26f35e3dba5f8f6d083a596fc)
    3.  adding puppeteer to the build sequence
        1.  Since we will be using gulp-jasmine-browser and will want to run
tests from the terminal, install puppeteer
        2.  For refernce, *see* [Section 7, "Unit Testing in Gulp," in Lesson 5,
    "How to Prevent Disasters," in the Udacity FED-ND Part 6,
    "JavaScript Tools & Testing,"](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5876358842/concepts/53738292280923)
        3.  Install puppeteer
            1.  `npm install puppeteer`
3.  Although not been currently implemented, it is worth noting that:

    1.  If one wanted to produce a more compact distribution, it would also be
desirable to install additional gulp dependencies, e.g.,

```
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
```

*See*, generally, Udacity FED-ND Part 6, ["JavaScript Tools & Testing"](https://classroom.udacity.com/nanodegrees/nd001/parts/20f5a632-38e6-48e7-88c8-e14c21590bb9/modules/de442af7-4ae2-48d7-a613-cf132eeaf60c/lessons/5861830171/concepts/53272908270923)

4.  The Jasmine documentation for Node.js recommends some additional commands
to facilitate running Jasmine tests under npm at the command line.

- Add Jasmine to your package.json

    -`npm install --save-dev jasmine`

- Initialize Jasmine in your project

    -`node node_modules/jasmine/bin/jasmine init`

- Set jasmine as your test script in your package.json

    -`"scripts": { "test": "jasmine" }`

- Run your tests

    -`npm test`

*See*: [JASMINE FOR NODE.JS](https://jasmine.github.io/pages/getting_started.html)

5.  Provide an example of an ESLint configuration file.

- Having completed these steps, depending on the styles that you have chosen, your ESLint configuration file, in this case a `json` file, `.eslintrc.json`, might possibly look something like this (although there can be considerable variation, depending on the options that you have selected):....

6.  Try to confirm where the ESLint configuration file is located during installation and update the section above on ESLint.

7.  Explain and describe a conda installation.

## Contributing

This [original feedreader repository](https://github.com/udacity/frontend-nanodegree-feedreader) from which this repository was forked is the starter code for _all_ Udacity students. Therefore, it is unlikely that Udacity will accept pull requests.  *See* [README.md](https://github.com/udacity/frontend-nanodegree-feedreader/blob/master/README.md) in the very last section, "Contributing."  (If you care to submit a pull request to this repository, I will try to take a look at it, but if you have a significant contribution to make, perhaps it would make more sense to suggest it to Udacity on the original repit's likely that it will be appreciated more by _all_ Udacity students on the [original feedreader repository](https://github.com/udacity/frontend-nanodegree-feedreader).)
