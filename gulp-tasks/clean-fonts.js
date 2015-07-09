'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('clean-fonts', function(done){

    utils.log('Cleaning dist folder fonts');
    utils.clean(config.dist + 'fonts/**/*.*', done);

});
