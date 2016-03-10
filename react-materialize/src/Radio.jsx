var React = require('react');

var Radio = React.createClass({
  propTypes: {
    className: React.PropTypes.oneOf(['with-gap']),
    group: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    label: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    onClick: React.PropTypes.func
  },

  render: function () {
    return (
     <p>
      <input onChange={this.props.onChange} className={this.props.className} name={this.props.group} type='radio' id={this.props.id} checked={this.props.checked} />
      <label htmlFor={this.props.id}>{this.props.label}</label>
     </p>
    ); 
  }
});

module.exports = Radio;
