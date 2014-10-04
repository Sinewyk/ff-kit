var React = require('react');
var Link = require('react-router').Link;
var t = require('../i18n').t;

var Application = React.createClass({
    render: function() {
        return (
        <header>
            <ul>
                <li><Link to="application">{t('links.main')}</Link></li>
                <li><Link to="config">{t('links.config')}</Link></li>
            </ul>
        </header>
        );
    }
});

module.exports = Application;
