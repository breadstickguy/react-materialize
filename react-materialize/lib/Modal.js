'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var cx = require('classnames');

var TransitionIn = require('./TransitionIn');
var LayeredComponent = require('./mixins/LayeredComponent');

var Modal = React.createClass({
  displayName: 'Modal',

  mixins: [LayeredComponent],

  propTypes: {
    onBackgroundClick: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
    visible: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      visible: false
    };
  },

  render: function render() {
    var modal;

    if (this.props.visible === true) {
      var classes = cx(this.props.className, 'modal', {
        visible: this.props.visible
      });

      modal = React.createElement(
        'div',
        { key: "modal", className: classes },
        this.props.children
      );
    }

    return React.createElement(
      TransitionIn,
      { transitionName: "modal-fade" },
      modal
    );
  },

  renderLayer: function renderLayer() {
    var overlay;

    if (this.props.visible === true) {
      overlay = React.createElement('div', { key: "overlay",
        className: "overlay modal-overlay",
        onClick: this.props.onBackgroundClick });
    }

    return React.createElement(
      TransitionIn,
      { transitionName: "overlay-fade" },
      overlay
    );
  }
});

Modal.Content = React.createClass({
  displayName: 'Content',

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, { className: "modal-content" }),
      this.props.children
    );
  }
});

Modal.Footer = React.createClass({
  displayName: 'Footer',

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, { className: "modal-footer" }),
      this.props.children
    );
  }
});

module.exports = Modal;