var React = require('react');
var AppComponent = require('./components/App.jsx');
var mountNode = window.document.body;

function App() {
    React.renderComponent(AppComponent(), mountNode, function() {
        console.log('React rendered !');
    });
}

module.exports = App;
