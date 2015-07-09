'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);
