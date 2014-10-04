var React = require('react');
var t = require('../i18n');

var FanfictionInput = React.createClass({
    getInitialState: function() {
        return {
            input: t.gettext('Copy/paste fanfiction link')
        };
    },
    render: function() {
        return (
        <div>
            <input onChange={this.handleInput} value={this.state.input} type="text"/>
            <button onClick={this.doStuff}>{t.gettext('Download')}</button>
            <div>{t.gettext('Preview')} : {this.state.input}</div>
        </div>
        );
    },
    handleInput: function(e) {
        this.setState({input: e.target.value.trim()});
    },
    doStuff: function(e) {
        console.log('stuff');
    }
});

module.exports = FanfictionInput;
