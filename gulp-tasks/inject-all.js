'use strict';

var utils = require('../utils/utils'),
    config = require('../gulp.config')(),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('inject-all', ['inject-js', 'compile-sass', 'template-cache'], function(){

    utils.log('HTML Injection: Injecting all css and js into src environment.');

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.customCss)))
        .pipe(gulp.dest(config.client));

});

