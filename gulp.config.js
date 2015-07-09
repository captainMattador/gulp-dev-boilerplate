
module.exports = function(){

    'use strict';

    var client = './src/client/',
        clientApp = client + 'app/',
        dist = './dist/',
        root = './',
        temp = './.tmp/';

    var config = {

        allJs: [
            './src/**/*.js',
            './*.js'
        ],

        appJs: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.factory.js',
            clientApp + '**/*.filter.js',
            clientApp + '**/*.controller.js',
            clientApp + '**/*.directive.js',
            clientApp + '**/*.template.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },

        client: client,

        clientApp: clientApp,

        customCss: temp + 'styles.css',

        dist: dist,

        fonts: './bower_components/font-awesome/fonts/**/*.*',

        htmltemplates: clientApp + '**/*.html',

        images: client + 'images/**/*.*',

        index: client + 'index.html',

        packages: [
            root + 'package.json',
            root + 'bower.json'
        ],

        root: root,

        sass: [
            client + 'sass/styles.scss'
        ],

        temp: temp,

        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },

        typescript: client + 'typescript/**/*.ts'
    };

    config.getWiredepDefaultOptions = function(){
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;

};
