'use strict';

var utilities = {},
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

module.exports = utilities;
