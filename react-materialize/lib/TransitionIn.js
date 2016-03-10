/*
 * From https://github.com/bjyoungblood/energize/blob/master/src/transition-in.jsx
 */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactTransitionGroup = require('react/lib/ReactTransitionGroup');
var ReactCSSTransitionGroupChild = require('react/lib/ReactCSSTransitionGroupChild');

var ReactCSSTransitionGroupAppear = React.createClass({
  displayName: 'ReactCSSTransitionGroupAppear',

  propTypes: {
    transitionName: React.PropTypes.string.isRequired,
    transitionEnter: React.PropTypes.bool,
    transitionLeave: React.PropTypes.bool,
    transitionAppear: React.PropTypes.bool,
    component: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      transitionEnter: true,
      transitionLeave: true,
      transitionAppear: true,
      component: 'span'
    };
  },

  wrapChild: function wrapChild(child) {
    return React.createElement(ReactCSSTransitionGroupChild, {
      name: this.props.transitionName,
      appear: this.props.transitionAppear,
      enter: this.props.transitionEnter,
      leave: this.props.transitionLeave
    }, child);
  },

  render: function render() {
    return React.createElement(ReactTransitionGroup, _extends({}, this.props, {
      childFactory: this.wrapChild,
      component: this.props.component
    }));
  }
});

module.exports = ReactCSSTransitionGroupAppear;