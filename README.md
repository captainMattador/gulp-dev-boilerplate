# gulp-dev-boilerplate

This is my personal Gulp Development setup orginally based on John Papa's PluralSight course.

It mostly assumes the use of AngularJs but is not required. It also has support for a TypeScript workflow.


Getting Started
-------------

Required Globally: Node.js, Bower.io, Nodemon.io.

Navigate to the folder you want to store your project, then:

`git clone https://github.com/captainMattador/gulp-dev-boilerplate.git your-project-name`

Run npm install to get all dependencies

`npm install`

Run bower install to get AngularJs and Font Awesome (or use bower to get the required libraries for your project)

`bower install`


Documentation
-------------

Run `gulp` or `gulp help` in the CLI to see gulp tasks.

Most important tasks:

`gulp serve-dev`: Start a localhost node server for dev build. This will launch your browser for as well.

`gulp serve-dist`: Start a localhost node server for distrobution build. This will launch your browser for as well.

`gulp bump-version`: updates the verioning of your project.

`gulp inject-js`: Inject all your working js into the src html (includening bower libraries components).

`gulp inject-all`: Inject all your working js and css into src html (this will also compile your sass before hand).

`gulp sass-watcher`: Watch your sass files for chanes and recompile.

`gulp compile-sass`: Compile sass.

`gulp compile-ts`: Compiles your src typescript files and mirrors the folder structure into the app folder.

`gulp ts-watcher`: Watch your typescript files for changes and recompile.

`gulp template-cache`: caches all html templates inside of "src/client/app/", places compiles them into a js file and adds them to Angulars Template Cache (used for production code).

`gulp optimize-dist`: optimizes all js and css and places it into the dist folder for production ready code. Also moves over all images (and optimizes them) and fonts.
