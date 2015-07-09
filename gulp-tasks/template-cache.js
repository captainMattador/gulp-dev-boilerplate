'use strict';

var config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('template-cache', ['clean-code'], function(){

    utils.log('Creating Angular Template Cache');

    return gulp
        .src(config.htmltemplates)
        .pipe($.minifyHtml({empty: true}))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp));

});
