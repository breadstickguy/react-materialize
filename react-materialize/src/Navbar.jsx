var React = require('react'),
    cx = require('classnames'),
    joinClasses = require('react/lib/joinClasses');

var Navbar = React.createClass({
  propTypes: {
    brand: React.PropTypes.node,
    left: React.PropTypes.bool,
    homeLink: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      homeLink: '/' 
    };
  },

  render: function () {
    var { brand, className, id } = this.props;
    var classes = {
      right: this.props.right
    };
    var brandClasses = {
      'brand-logo': true,
      right: this.props.left
    };
    return (
      <nav id={id}>
        <div className='nav-wrapper'>
          <a href={this.props.homeLink} className={cx(brandClasses)}>{brand}</a>
          <ul className={joinClasses(className, cx(classes))}>
            {this.props.children}
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
