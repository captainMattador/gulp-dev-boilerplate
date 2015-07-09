'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('clean-code', function(done){

    utils.log('Cleaning out all js and html');

    var files = [].concat(
        config.temp + '**/*.js',
        config.dist + '**/*.html',
        config.dist + 'js/**/*.js'
    );

    utils.clean(files, done);
});
