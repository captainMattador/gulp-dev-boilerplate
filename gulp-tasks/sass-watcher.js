'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('sass-watcher', function(){

    utils.log('Watching Sass for changes.');
    gulp.watch(config.sass, ['compile-sass']);

});
