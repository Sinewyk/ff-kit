var React = require('react');
var t = require('../i18n');

var FanfictionInput = React.createClass({
    render: function() {
        return (
        <div className="main">{t.gettext('Configuration')}</div>
        );
    }
});

module.exports = FanfictionInput;
