//node-gettext is requiring a .node file ...
var Gettext = window.require("node-gettext");
var gt = new Gettext();
var fs = require('fs');
var path = require('path');

var languages = require('./languages');

languages.forEach(function(_language) {
    var filePath = path.resolve(process.cwd(), 'lang', _language + '.mo');
    var fileContents = fs.readFileSync(filePath);
    gt.addTextdomain(_language, fileContents);
});

function t(key) {
    return gt.gettext(key);
}

function changeLanguage(_language) {
    gt.textdomain(_language);
}

module.exports = {
    t: t,
    changeLanguage: changeLanguage
};
