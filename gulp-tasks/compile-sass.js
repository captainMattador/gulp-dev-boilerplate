'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('compile-sass', ['clean-css'], function(){

    utils.log('Styles: SASS to CSS');

    return gulp
        .src(config.sass)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.temp));

});
