'use strict';

var React = require('react');

var Progress = React.createClass({
  displayName: 'Progress',

  propTypes: {
    type: React.PropTypes.oneOf(['determinate', 'indeterminate']).isRequired,
    percentage: React.PropTypes.string
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'progress' },
      React.createElement('div', { className: this.props.type, style: { width: this.props.percentage } })
    );
  }
});

module.exports = Progress;