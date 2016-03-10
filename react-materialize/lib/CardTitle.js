'use strict';

var React = require('react');

var CardTitle = React.createClass({
  displayName: 'CardTitle',

  propTypes: {
    image: React.PropTypes.string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      theme: 'blue-grey darken-1',
      contentTheme: 'white-text'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'card-image ' + this.props.theme },
      React.createElement('img', { src: this.props.image }),
      React.createElement(
        'span',
        { className: 'card-title' },
        this.props.children
      )
    );
  }
});

module.exports = CardTitle;