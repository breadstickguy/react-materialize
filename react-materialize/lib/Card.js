'use strict';

var React = require('react');

var Card = React.createClass({
  displayName: 'Card',

  propTypes: {
    title: React.PropTypes.string,
    theme: React.PropTypes.string,
    contentTheme: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      theme: 'blue-grey darken-1',
      contentTheme: 'white-text'
    };
  },

  renderTitle: function renderTitle() {
    if (!this.props.title) {
      return null;
    }

    return React.createElement(
      'span',
      { className: 'card-title ' + this.props.contentTheme },
      this.props.title
    );
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'card ' + this.props.theme },
      this.props.header,
      React.createElement(
        'div',
        { className: 'card-content ' + this.props.contentTheme },
        this.renderTitle(),
        this.props.children
      ),
      React.createElement(
        'div',
        { className: 'card-action' },
        this.props.actions
      )
    );
  }
});

module.exports = Card;