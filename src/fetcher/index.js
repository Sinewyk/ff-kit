var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));

function check(_url) {
    return request.headAsync(_url);
}

module.exports = check;
