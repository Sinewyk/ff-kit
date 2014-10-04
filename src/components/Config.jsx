var React = require('react');
var t = require('../i18n');

var FanfictionInput = React.createClass({
    render: function() {
        return (
        <div>{t.gettext('Configuration')}</div>
        );
    }
});

module.exports = FanfictionInput;
