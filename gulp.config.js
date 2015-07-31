
module.exports = function(){

    'use strict';

    var client = './src/client/',
        clientApp = client + 'app/',
        defaultPort = 7203,
        dist = './dist/',
        root = './',
        server = './src/server/',
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
            '!' + clientApp + '**/*.spec.js',
            '!' + clientApp + 'test/**/*.*',
            '!' + clientApp + 'example/**/*.*'
        ],

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },

        browserReloadDelay: 1000,

        client: client,

        clientApp: clientApp,

        customCss: temp + 'styles.css',

        dist: dist,

        fonts: './bower_components/font-awesome/fonts/**/*.*',

        html: client + '**/*.html',

        htmltemplates: clientApp + '**/*.html',

        images: client + 'images/**/*.*',

        index: client + 'index.html',

        nodeServer: server + 'app.js',

        packages: [
            root + 'package.json',
            root + 'bower.json'
        ],

        port: process.env.PORT || defaultPort,

        root: root,

        sass: [
            client + 'sass/styles.scss'
        ],

        server: server,

        temp: temp,

        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },

        typescript: [
            client + 'typescript/**/*.ts',
            '!' + client + 'typescript/test/**/*.*'
        ]
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
