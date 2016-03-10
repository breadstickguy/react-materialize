var React = require('react'),
    cx = require('classnames');

var Row = React.createClass({
  propTypes: {
    node: React.PropTypes.node.isRequired,
    className: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      node: 'div',
      className: null
    };
  },

  render: function () {
    var C = this.props.node;
    var classes = {
      row: true
    };

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

module.exports = Row;
