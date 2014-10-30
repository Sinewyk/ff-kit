var React = require('react');
var Routes = require('_components/Routes.jsx');
var mountNode = window.document.body;

function App() {
    React.render(Routes, mountNode);
}

module.exports = App;
