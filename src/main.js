//languageConf @todo: read conf
var locale = 'fr';
require('_i18n').moment.locale(locale);

if (process.env.NODE_ENV === 'development') {
    require('bluebird').longStackTraces();
}

// Do this before creating actions or stores
require('reflux').setEventEmitter(require('events').EventEmitter);

var App = require('./app');

new App();
