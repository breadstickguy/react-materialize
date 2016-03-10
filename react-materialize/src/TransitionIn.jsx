/*
 * From https://github.com/bjyoungblood/energize/blob/master/src/transition-in.jsx
 */

var React = require('react');
var ReactTransitionGroup = require('react/lib/ReactTransitionGroup');
var ReactCSSTransitionGroupChild =require('react/lib/ReactCSSTransitionGroupChild');

var ReactCSSTransitionGroupAppear = React.createClass({
  propTypes: {
    transitionName: React.PropTypes.string.isRequired,
    transitionEnter: React.PropTypes.bool,
    transitionLeave: React.PropTypes.bool,
    transitionAppear: React.PropTypes.bool,
    component: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      transitionEnter: true,
      transitionLeave: true,
      transitionAppear: true,
      component: 'span'
    };
  },

  wrapChild: function (child) {
    return React.createElement(ReactCSSTransitionGroupChild, {
      name : this.props.transitionName,
      appear : this.props.transitionAppear,
      enter : this.props.transitionEnter,
      leave : this.props.transitionLeave,
    }, child);
  },

  render: function () {
    return (
      <ReactTransitionGroup
        {...this.props}
        childFactory={this.wrapChild}
        component = {this.props.component}
        />
    );
  }
});

module.exports = ReactCSSTransitionGroupAppear;
