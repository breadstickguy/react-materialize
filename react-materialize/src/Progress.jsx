var React = require('react');

var Progress = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['determinate', 'indeterminate']).isRequired,
    percentage: React.PropTypes.string
  },

  render: function () {
    return (
      <div className='progress'>
        <div className={this.props.type} style={{width: this.props.percentage}}></div>
      </div>
    );
  }
});

module.exports = Progress;
