var React = require('react');
var t = require('../i18n').t;

var FanfictionInput = React.createClass({
    getInitialState: function() {
        return {
            input: t('placeholder.fflink')
        };
    },
    render: function() {
        return (
        <div>
            <input onChange={this.handleInput} value={this.state.input} type="text"/>
            <button onClick={this.doStuff}>{t('btn.download.ff')}</button>
            <div>{t('preview')} : {this.state.input}</div>
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
