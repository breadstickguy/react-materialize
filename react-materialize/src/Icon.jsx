var React = require('react/addons'),
    cx = require('classnames'),
    constants = require('./constants');

var Icon = React.createClass({
  propTypes: {
    placement: React.PropTypes.oneOf(['left', 'right']),
    mdi: React.PropTypes.string.isRequired
  },

  render: function () {
    var classes = {
      'material-icons': true
    };
    if (this.props.placement) {
      classes[this.props.placement] = true;
    }
    return <i className={cx(classes)}>{this.props.mdi}</i>;
  }
});

module.exports = Icon;
