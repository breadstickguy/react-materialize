var React = require('react');

var Card = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    theme: React.PropTypes.string,
    contentTheme: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      theme: 'blue-grey darken-1',
      contentTheme: 'white-text',
    };
  },

  renderTitle: function () {
    if ( ! this.props.title ) {
      return null;
    }

    return (
      <span className={'card-title ' + this.props.contentTheme}>
        {this.props.title}
      </span>
    );
  },

  render: function () {
    return (
      <div className={'card ' + this.props.theme}>
        {this.props.header}
        <div className={'card-content ' + this.props.contentTheme}>
          {this.renderTitle()}
          {this.props.children}
        </div>
        <div className='card-action'>
          {this.props.actions}
        </div>
      </div>
    );
  }
})

module.exports = Card;
