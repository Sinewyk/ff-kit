var React = require('react');
var fs = require('fs');

var App = React.createClass({
    files: function() {
        return fs.readdirSync(process.cwd()).map(function(name, index) {
            return <div key={index}>{name}</div>
        });
    },
    render: function() {
        return (
            <div>
                <div>Hello World !</div>
                {this.files()}
            </div>
        );
    }
});

module.exports = App;
