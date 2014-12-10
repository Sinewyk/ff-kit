var React = require('react');
var Router = require('react-router');
var routes = require('_components/Routes.jsx');
var mountNode = window.document.body;

function App() {
    Router.run(routes, function(Handler) {
        React.render(React.createElement(Handler), mountNode);
    });
}

module.exports = App;
