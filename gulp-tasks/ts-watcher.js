'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('ts-watcher', function(){

    utils.log('Watching Typescript files for changes.');
    gulp.watch(config.typescript, ['compile-ts']);

});

