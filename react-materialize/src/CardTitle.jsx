var React = require('react');

var CardTitle = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },

  getDefaultProps: function () {
    return {
      theme: 'blue-grey darken-1',
      contentTheme: 'white-text',
    };
  },

  render: function () {
    return (
      <div className={'card-image ' + this.props.theme}>
        <img src={this.props.image} />
        <span className='card-title'>{this.props.children}</span>
      </div>
    );
  }
})

module.exports = CardTitle;
