'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('inject-js', function(){

    utils.log('HTML Injection: js into src environment.');

    var options = config.getWiredepDefaultOptions(),
        wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.appJs)))
        .pipe(gulp.dest(config.client));

});
