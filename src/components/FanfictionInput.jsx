var React = require('react');

var FanfictionInput = React.createClass({
    getInitialState: function() {
        return {
            input: null
        };
    },
    render: function() {
        return (
        <div>
            <input onChange={this.handleInput} value={this.state.input} type="text"/>
            <div>Preview : {this.state.input}</div>
        </div>
        );
    },
    handleInput: function(e) {
        this.setState({input: e.target.value.trim()});
    }
});

module.exports = FanfictionInput;
