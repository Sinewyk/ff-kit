require('./i18n').textdomain('fr');

// Do this before creating actions or stores
require('reflux').setEventEmitter(require('events').EventEmitter);

var App = require('./app');

new App();
