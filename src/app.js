var React = require('react');
var Routes = require('./components/Routes.jsx');
var mountNode = window.document.body;

function App() {
    React.renderComponent(Routes, mountNode);
}

module.exports = App;
