var React = require('react');
var Link = require('react-router').Link;
var t = require('../i18n');

var Application = React.createClass({
    render: function() {
        return (
        <header>
            <ul>
                <li><Link to="application">{t.gettext('Fanfiction')}</Link></li>
                <li><Link to="config">{t.gettext('Configuration')}</Link></li>
            </ul>
        </header>
        );
    }
});

module.exports = Application;
