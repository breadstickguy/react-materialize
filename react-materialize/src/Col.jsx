var React = require('react'),
    cx = require('classnames'),
    constants = require('./constants');

var Col = React.createClass({
  propTypes: {
    node: React.PropTypes.node.isRequired,
    s: React.PropTypes.number,
    m: React.PropTypes.number,
    l: React.PropTypes.number,
    offset: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      node: 'div'
    };
  },

  render: function() {
    var C = this.props.node;
    var classes = {col: true};
    constants.SIZES.forEach(s => {
      if (this.props[s]) {
        classes[s + this.props[s]] = true;
      }
    });

    if (this.props.offset) {
      this.props.offset.split(' ').forEach(offset => {
        classes['offset-' + offset] = true;
      });
    }

    if (this.props.className) {
      var classNames = this.props.className.split(' ');
      classNames.forEach(className => {
        classes[className] = true;
      });
    }

    return (
      <C {...this.props} className={cx(classes)}>
        {this.props.children}
      </C>
    );
  }
});

module.exports = Col;
