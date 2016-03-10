'use strict';

var React = require('react/addons'),
    cx = require('classnames'),
    constants = require('./constants');

var Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    placement: React.PropTypes.oneOf(['left', 'right']),
    mdi: React.PropTypes.string.isRequired
  },

  render: function render() {
    var classes = {
      'material-icons': true
    };
    if (this.props.placement) {
      classes[this.props.placement] = true;
    }
    return React.createElement(
      'i',
      { className: cx(classes) },
      this.props.mdi
    );
  }
});

module.exports = Icon;