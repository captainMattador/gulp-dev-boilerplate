'use strict';

var utils = require('../utils/utils'),
    args = require('yargs').argv,
    config = require('../gulp.config')(),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('validate', function(){

    utils.log('Validate: Analyzing js with Jshint and Jscs.');

    return gulp
        .src(config.allJs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));

});
