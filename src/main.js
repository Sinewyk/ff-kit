require('./i18n').textdomain('fr');

if (process.env.NODE_ENV === 'development') {
    require('bluebird').longStackTraces();
}

// Do this before creating actions or stores
require('reflux').setEventEmitter(require('events').EventEmitter);

var App = require('./app');

new App();
