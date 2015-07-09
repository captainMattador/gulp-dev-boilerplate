'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('clean-all', function(done){

    var delFiles = [].concat(config.dist, config.temp);

    utils.log('Cleaning dist and src');
    utils.clean(delFiles, done);

});
