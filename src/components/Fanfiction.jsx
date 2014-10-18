var React = require('react');
var t = require('../i18n');
var storyStore = require('../stores/story');
var checkStory = require('../actions').checkStory;
var Story = require('./Story.jsx');

var Fanfiction = React.createClass({
    componentDidMount: function() {
        this.unsubscribe = storyStore.listen(this._onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    getStateFromStoryStore: function() {
        return storyStore.getStatus();
    },
    getInitialState: function() {
        return {
            story: this.getStateFromStoryStore(),
            input: null
        };
    },
    render: function() {
        return (
        <div className="main">
            <div>
                <label htmlFor="link">{t.gettext('URL')} : </label>
                <input placeholder={t.gettext('Insert link here ...')} id="link" onChange={this.handleInput} value={this.state.input} type="text"/>
                <button onClick={this.checkLink} disabled={this.state.story.fetching}>{t.gettext('Check')}</button>
                <Story story={this.state.story}/>
            </div>
        </div>
        );
    },
    handleInput: function(e) {
        this.setState({input: e.target.value.trim()});
    },
    checkLink: function(e) {
        checkStory(this.state.input);
    },
    _onChange: function(e) {
        this.setState({story: this.getStateFromStoryStore()});
    }
});

module.exports = Fanfiction;
