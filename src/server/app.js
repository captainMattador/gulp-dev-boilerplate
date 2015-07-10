/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 7203;
var routes;

var environment = process.env.NODE_ENV;

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment) {
    case 'dist':
        console.log('** Dist **');
        app.use(express.static('./dist/'));
        app.use('/*', express.static('./dist/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});
