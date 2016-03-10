'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react'),
    cx = require('classnames'),
    constants = require('./constants');

var Button = React.createClass({
  displayName: 'Button',

  propTypes: {
    node: React.PropTypes.node,
    waves: React.PropTypes.oneOf(['effect', 'light']),
    large: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    disabled: React.PropTypes.bool
  },

  render: function render() {
    var _this = this;

    var C = this.props.node || 'button';
    var classes = {
      btn: true,
      disabled: this.props.disabled,
      'waves-effect': !!this.props.waves
    };

    if (constants.WAVES.indexOf(this.props.waves) > -1) {
      classes['waves-' + this.props.waves] = true;
    }

    constants.STYLES.forEach(function (style) {
      classes['btn-' + style] = _this.props[style];
    });

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
  },

  renderAnchor: function renderAnchor(classes) {
    var C = this.props.node || 'a';
    var href = this.props.href || '#';
    return React.createElement(
      C,
      _extends({}, this.props, {
        href: href,
        className: cx(classes) }),
      this.props.children
    );
  }
});

module.exports = Button;