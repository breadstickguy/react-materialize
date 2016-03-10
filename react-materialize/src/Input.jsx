var React = require('react'),
    cx = require('classnames'),
    constants = require('./constants');

var Input = React.createClass({
  propTypes: {
    s: React.PropTypes.number,
    m: React.PropTypes.number,
    l: React.PropTypes.number,
    label: React.PropTypes.node,
    type: React.PropTypes.string,
    className: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      id: '',
      type: 'text',
      element: 'input'
    };
  },

  getInitialState: function () {
    return {
      isFocused: false,
      hasValue: (this.props.value ? true : false)
    };
  },

  render: function () {
    var divClasses = {
      'input-field': true
    };
    var inputClasses = {};
    var labelClasses = {};
    if (this.props.className) {
      var classes = this.props.className.split(' ');
      classes.forEach(className => {
        inputClasses[className] = true;
      });
    }
    if (this.state.isFocused || this.state.hasValue || this.props.placeholder) {
      labelClasses.active = true;
    }
    constants.SIZES.forEach(size => {
      if (this.props[size]) {
        divClasses[size + this.props[size]] = true;
      }
    });
    var C;
    switch(this.props.element) {
      case 'textarea':
        C = 'textarea';
        inputClasses['materialize-textarea'] = true;
        break;
      case 'select':
        C = 'select';
        break;
      default:
        C = 'input';
    }
    return (
      <div className={cx(divClasses)}>
        <C ref='input' id={this.props.id} type={this.props.type} className={cx(inputClasses)} onBlur={this._handleInputBlur} onFocus={this._handleInputFocus} onChange={this._handleInputChange} placeholder={this.props.placeholder} value={this.props.value} name={this.props.name} />
        <label htmlFor={this.props.id} className={cx(labelClasses)}>{this.props.label}</label>
      </div>
    );
  },

  _getInputNode: function () {
    React.findDOMNode(this.refs.input);
  },

  _handleInputBlur: function(e) {
    this.setState({isFocused: false});
    if (this.props.onBlur) this.props.onBlur(e);
  },

  _handleInputFocus: function(e) {
    this.setState({isFocused: true});
    if (this.props.onFocus) this.props.onFocus(e);
  },

  _handleInputChange: function(e) {
    this.setState({hasValue: e.target.value});
    if (this.props.onChange) this.props.onChange(e);
  },
});

module.exports = Input;
