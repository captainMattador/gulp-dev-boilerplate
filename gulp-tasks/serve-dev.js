'use strict';

var gulp = require('gulp'),
    utils = require('../utils/utils');

gulp.task('serve-dev', ['inject-all'], function(){

    utils.serve(true); // serving dev

});
