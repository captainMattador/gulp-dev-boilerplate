'use strict';

var utils = require('../utils/utils'),
    config = require('../gulp.config')(),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('optimize-dist', ['inject-all', 'images', 'fonts'], function(){

    utils.log('Optimizing Asset files for dist');

    var templateCache = config.temp + config.templateCache.file,
        assets = $.useref.assets({searchPath: './'}),
        cssFilter = $.filter('**/*.css'),
        libJsFilter = $.filter('**/lib.js'),
        appJsFilter = $.filter('**/app.js');

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.inject(gulp.src(templateCache, {read: false}),
                       {starttag: '<!-- inject:templates:js -->'}))
        .pipe(assets)

        // optimize css
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())

        // optimize lib js
        .pipe(libJsFilter)
        .pipe($.uglify())
        .pipe(libJsFilter.restore())

        // optimize app js
        .pipe(appJsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(appJsFilter.restore())

        // replace files in dist index
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(config.dist))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(config.dist));

});
