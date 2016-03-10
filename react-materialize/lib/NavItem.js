'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react'),
    cx = require('classnames');

var NavItem = React.createClass({
  displayName: 'NavItem',

  propTypes: {
    href: React.PropTypes.string
  },

  render: function render() {
    var _props = this.props;
    var href = _props.href;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['href', 'children']);

    return React.createElement(
      'li',
      props,
      React.createElement(
        'a',
        { href: href },
        children
      )
    );
  }
});

module.exports = NavItem;