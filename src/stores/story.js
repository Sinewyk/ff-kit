var Reflux = require('reflux');
var Actions = require('../actions');
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));
var t = require('../i18n');
var url = require('url');
var _ = require('lodash');

var acceptedDomains = [
    'www.fanfiction.net'
];

var storyStore = Reflux.createStore({
    init: function() {
        this.checking = false;
        this.listenTo(Actions.checkStory, this.checkStory);
    },
    checkStory: function(_url) {
        this._setStatus(false, 'fetching', true);
        this._isUrlOk(_url).bind(this)
        .then(this._isHostAmongOurSupportedHosts)
        .then(request.getAsync.bind(request))
        .then(function(data) {
            //we can do something with the data =D
            console.log(data[1]);
            this._setStatus(false, 'success', false);
        }).catch(function(e) {
            this._setStatus(e.message);
        });
    },
    _isUrlOk: function(_url) {
        return new Promise(function(resolve, reject) {
            try {
                var result = url.parse(_url);
            } catch (e) {
                return reject(new Error(t.gettext('Please fix your URL')));
            }
            if (result.host) {
                return resolve(result);
            } else {
                return reject(new Error(t.gettext('Please fix your URL')));
            }
        });
    },
    _isHostAmongOurSupportedHosts: function(urlParsed) {
        return new Promise(function(resolve, reject) {
            if (_.contains(acceptedDomains, urlParsed.host)) {
                return resolve(urlParsed.href);
            }
            return reject(new Error(t.gettext('This domain is not supported ...')));
        });
    },
    _setStatus: function(_error, _trigger, _checking) {
        this.lastIsError = _error || false;
        this.checking = _checking || false;
        var trigger = _trigger || 'error';
        this.trigger(trigger);
    },
    getStatus: function() {
        return {
            fetching: this.checking,
            error: this.lastIsError
        };
    }
});

module.exports = storyStore;
