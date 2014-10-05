var React = require('react');
var Link = require('react-router').Link;
var t = require('../i18n');

var Application = React.createClass({
    render: function() {
        return (
        <header className="navbar">
            <ul>
                <li className="navbar-choice"><Link to="application">{t.gettext('Fanfiction')}</Link></li>
                <li className="navbar-choice"><Link to="config">{t.gettext('Configuration')}</Link></li>
            </ul>
        </header>
        );
    }
});

module.exports = Application;