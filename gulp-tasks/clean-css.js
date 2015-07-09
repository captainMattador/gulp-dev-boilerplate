'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('clean-css', function(done){

    utils.log('Cleaning temp folder css');
    utils.clean(config.temp + '**/*.css', done);

});
