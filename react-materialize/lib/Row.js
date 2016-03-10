'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react'),
    cx = require('classnames');

var Row = React.createClass({
  displayName: 'Row',

  propTypes: {
    node: React.PropTypes.node.isRequired,
    className: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      node: 'div',
      className: null
    };
  },

  render: function render() {
    var C = this.props.node;
    var classes = {
      row: true
    };

    if (this.props.className) {
      var classNames = this.props.className.split(' ');
      classNames.forEach(function (className) {
        classes[className] = true;
      });
    }

    return React.createElement(
      C,
      _extends({}, this.props, { className: cx(classes) }),
      this.props.children
    );
  }
});

module.exports = Row;