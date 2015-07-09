'use strict';

var args = require('yargs').argv,
    config = require('../gulp.config')(),
    gulp = require('gulp'),
    utils = require('../utils/utils'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('bump-version', function(){

    var msg = 'Bumping Version';
    var type = args.type;
    var version = args.version;
    var options = {};

    if(version){
        options.version = version;
        msg += ' to ' + version;
    }else{
        options.type = type;
        msg += ' for a ' + type;
    }

    utils.log(msg);

    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));

});
