'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react'),
    cx = require('classnames'),
    constants = require('./constants');

var Col = React.createClass({
  displayName: 'Col',

  propTypes: {
    node: React.PropTypes.node.isRequired,
    s: React.PropTypes.number,
    m: React.PropTypes.number,
    l: React.PropTypes.number,
    offset: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      node: 'div'
    };
  },

  render: function render() {
    var _this = this;

    var C = this.props.node;
    var classes = { col: true };
    constants.SIZES.forEach(function (s) {
      if (_this.props[s]) {
        classes[s + _this.props[s]] = true;
      }
    });

    if (this.props.offset) {
      this.props.offset.split(' ').forEach(function (offset) {
        classes['offset-' + offset] = true;
      });
    }

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

module.exports = Col;