'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('fonts', ['clean-fonts'], function(){

    utils.log('Copying over fonts to dist folder');

    return gulp.src(config.fonts)
        .pipe(gulp.dest(config.dist + 'fonts'));

});
