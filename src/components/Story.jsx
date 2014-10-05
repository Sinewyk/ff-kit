var React = require('react');
var t = require('../i18n');

var Story = React.createClass({
    conditionalFetching: function() {
        if (this.props.story.fetching) {
            return <div className="loading"></div>
        }
    },
    conditionalError: function() {
        if (this.props.story.error) {
            return this.props.story.error;
        }
    },
    render: function() {
        return (
        <div className="story">
            {this.conditionalFetching()}
            {this.conditionalError()}
        </div>
        );
    }
});

module.exports = Story;
