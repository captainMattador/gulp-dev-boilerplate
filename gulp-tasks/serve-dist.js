'use strict';

var gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('serve-dist', ['optimize-dist'], function(){

    utils.serve(false); // serving distribution

});
