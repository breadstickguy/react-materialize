'use strict';

var React = require('react'),
    cx = require('classnames'),
    joinClasses = require('react/lib/joinClasses');

var Navbar = React.createClass({
  displayName: 'Navbar',

  propTypes: {
    brand: React.PropTypes.node,
    left: React.PropTypes.bool,
    homeLink: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      homeLink: '/'
    };
  },

  render: function render() {
    var _props = this.props;
    var brand = _props.brand;
    var className = _props.className;
    var id = _props.id;

    var classes = {
      right: this.props.right
    };
    var brandClasses = {
      'brand-logo': true,
      right: this.props.left
    };
    return React.createElement(
      'nav',
      { id: id },
      React.createElement(
        'div',
        { className: 'nav-wrapper' },
        React.createElement(
          'a',
          { href: this.props.homeLink, className: cx(brandClasses) },
          brand
        ),
        React.createElement(
          'ul',
          { className: joinClasses(className, cx(classes)) },
          this.props.children
        )
      )
    );
  }
});

module.exports = Navbar;