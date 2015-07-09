'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('images', ['clean-images'], function(){

    utils.log('Copying over images to dist folder and compressing');

    return gulp.src(config.images)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.dist + 'images'));

});
