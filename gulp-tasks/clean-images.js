'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('clean-images', function(done){

    utils.log('Cleaning dist folder images');
    utils.clean(config.dist + 'images/**/*.*', done);

});
