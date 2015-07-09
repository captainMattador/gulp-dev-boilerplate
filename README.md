# gulp-dev-boilerplate

This is my personal Gulp Development setup orginally based on John Papa's PluralSight course.

It mostly assumes the use of AngularJs but is not required. It also has support for a TypeScript workflow.


Getting Started
-------------

Navigate to the folder you want to store your project, then:

git clone https://github.com/captainMattador/gulp-dev-boilerplate.git your-project-name

Run npm install to get all dependencies

npm install

Run bower install to get AngularJs and Font Awesome (or use bower to get the required libraries for your project)

bower install


Documentation
-------------

Run 'gulp' or 'gulp help' in the CLI to see gulp tasks.

Current tasks

gulp bump-version: updates the verioning of your project.

gulp inject-js: Inject all your working js into the src html (includening bower libraries components).

gulp inject-all: Inject all your working js and css into src html (this will also compile your sass before hand).

gulp sass-watcher: Watch your sass files as you work.

gulp compile-sass: Compile sass.

gulp compile-ts: Compiles your src typescript files and places the js in it's own folder of the same name (assumes your ts files are modules). Example: maps.ts -> "src/client/app/maps/maps.module.js"

gulp template-cache: caches all html templates inside of "src/client/app/", places compiles them into a js file and adds them to Angulars Template Cache (used for production code).

gulp optimize-dist: optimizes all js and css and places it into the dist folder for production ready code. Also moves over all images (and optimizes them) and fonts.
