var React = require('react');
var Header = require('./Header.jsx');
//need window require for webkit stuff
var gui = window.require('nw.gui');

var Application = React.createClass({
    render: function() {
        return (
        <div>
            <Header/>
            <this.props.activeRouteHandler/>
        </div>
        );
    },
    componentDidMount: function() {
        gui.Window.get().show();
    }
});

module.exports = Application;
