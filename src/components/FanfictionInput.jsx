var React = require('react');
var t = require('../i18n');

//@todo fix thise useless call because Poedit with the js parser can't see the string ...
t.gettext('Insert link here ...');

var FanfictionInput = React.createClass({
    getInitialState: function() {
        return {
            input: null
        };
    },
    render: function() {
        return (
        <div className="main">
            <div>
                <label htmlFor="link">{t.gettext('URL')} : </label>
                <input placeholder={t.gettext('Insert link here ...')} id="link" onChange={this.handleInput} value={this.state.input} type="text"/>
                <button onClick={this.checkLink}>{t.gettext('Check')}</button>
            </div>
        </div>
        );
    },
    handleInput: function(e) {
        this.setState({input: e.target.value.trim()});
    },
    checkLink: function(e) {
        console.log('checking the link ...');
    }
});

module.exports = FanfictionInput;
