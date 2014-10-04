var React = require('react');
var Link = require('react-router').Link;

var Application = React.createClass({
    render: function() {
        return (
        <header>
            <ul>
                <li><Link to="application">Do stuff</Link></li>
                <li><Link to="config">Config</Link></li>
            </ul>
        </header>
        );
    }
});

module.exports = Application;
