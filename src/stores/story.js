var Reflux = require('reflux');
var Actions = require('../actions');
var fetcher = require('../fetcher');
var t = require('../i18n');
var Promise = require('bluebird');
var OperationalError = Promise.OperationalError;
var URL = require('url');

var storyStore = Reflux.createStore({
    init: function() {
        this.checking = false;
        this.listenTo(Actions.checkStory, this.checkStory);
    },
    //@todo PROMISIFY EVERYTHING, EVERYWHERE
    //@todo AMPERSAND STATE BECAUSE MOTHERFUCKER !
    //@todo clean separating between the "story",
    //and the state of the store like fetching and error
    checkStory: function(_url) {
        var self = this;
        this.checking = true;
        this.lastIsError = false;
        this.trigger('fetching');
        if (this._isUrlOk(_url)) {
            fetcher(_url).then(function() {
                self.checking = false;
                self.lastIsError = false;
                self.trigger('success');
            }).catch(OperationalError, function(e) {
                self.checking = false;
                self.lastIsError = true;
                self.trigger('error');
            });
        } else {
            this.lastIsError = t.gettext('Please fix your URL');
            this.checking = false;
            this.trigger('error');
        }
    },
    _isUrlOk: function(_url) {
        var url = _url || '';
        return !!URL.parse(url).host;
    },
    getStatus: function() {
        return {
            fetching: this.checking,
            error: this.lastIsError
        };
    }
});

module.exports = storyStore;
