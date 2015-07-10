'use strict';

var args = require('yargs').argv,
    config = require('../gulp.config')(),
    utilities = {},
    browserSync = require('browser-sync'),
    del = require('del'),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

utilities.log = function(msg){

    if(typeof(msg) === 'object'){
        for(var item in msg){
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    }
    else{
        $.util.log($.util.colors.blue(msg));
    }

};

utilities.clean = function(path, done){

    utilities.log('Cleaning: ' + path);
    del(path, done);

};

utilities.serve = function(isDev){

    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': config.port,
            'NODE_ENV': isDev ? 'dev' : 'dist'
        },
        watch: [config.server]
    };

    return $.nodemon(nodeOptions)
        .on('restart', function(ev){
            utilities.log('***** Nodemon restarted');
            utilities.log('***** Files changed on restart:\n' + ev);
            setTimeout(function(){
                browserSync.notify('reloading now...');
                browserSync.reload({stream: false});
            }, config.browserReloadDelay);
        })
            .on('start', function(){
            utilities.log('***** Nodemon Started');
            startBrowserSync(isDev);
        })
            .on('crash', function(){
            utilities.log('***** Nodemon Crashed: script crashed for somereason');
        })
            .on('exit', function(){
            utilities.log('***** Nodemon exited cleanly');
        });

};

module.exports = utilities;

// browser sync helper functions for serve

function changeEvent(event){

    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');

    utilities.log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function startBrowserSync(isDev){

    if(args.noSync || browserSync.active){
        return;
    }

    utilities.log('Starting Browser-syn on port ' + config.port);

    if(isDev){
        gulp.watch(config.sass, ['compile-sass'])
            .on('change', function(event){
                changeEvent(event);
            });
    }else{
        gulp.watch(config.sass, config.appJs, config.html, ['optimize-dist', browserSync.reload])
            .on('change', function(event){
                changeEvent(event);
            });
    }

    var options = {
        proxy: 'localhost:' + config.port,
        port: 3000,
        files: isDev ? [
            config.client + '**/*.*',
            '!' + config.sass,
            config.temp + '**/*.css'
        ] : [],
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 1000
    };

    browserSync(options);

}
