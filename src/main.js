//make react work in node-webkit
//Not necessary because browserify ftw ...
//global.document = window.document;
//global.navigator = window.navigator;

var App = require('./app');

new App();

console.log('App launched! ');
