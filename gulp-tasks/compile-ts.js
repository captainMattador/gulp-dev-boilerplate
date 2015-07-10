'use strict';

var utils = require('../utils/utils'),
    config = require('../gulp.config')(),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('compile-ts', function(){

    utils.log('Compiling Typescript.');

    return gulp
        .src(config.typescript)
        .pipe($.rename(function(path){
            path.dirname = path.dirname;
            path.basename = path.basename;
        }))
        .pipe($.typescript())
        .pipe(gulp.dest(config.clientApp));

});
