var React = require('react');
var cx = require('classnames');

var TransitionIn = require('./TransitionIn');
var LayeredComponent = require('./mixins/LayeredComponent');

var Modal = React.createClass({

  mixins : [ LayeredComponent ],

  propTypes : {
    onBackgroundClick : React.PropTypes.func.isRequired,
    className : React.PropTypes.string,
    visible : React.PropTypes.bool,
  },

  getDefaultProps: function () {
    return {
      visible : false,
    };
  },

  render: function () {
    var modal;

    if (this.props.visible === true) {
      var classes = cx(this.props.className, 'modal', {
        visible : this.props.visible,
      });

      modal = (
        <div key="modal" className={classes}>
          {this.props.children}
        </div>
      );
    }

    return (
      <TransitionIn transitionName="modal-fade">
        {modal}
      </TransitionIn>
    );
  },

  renderLayer: function () {
    var overlay;

    if (this.props.visible === true) {
      overlay = (
        <div key="overlay"
             className="overlay modal-overlay"
             onClick={this.props.onBackgroundClick} />
      );
    }

    return (
      <TransitionIn transitionName="overlay-fade">
        {overlay}
      </TransitionIn>
    );
  },
});

Modal.Content = React.createClass({
  render: function () {
    return (
      <div {...this.props} className="modal-content">
        {this.props.children}
      </div>
    );
  },
});

Modal.Footer = React.createClass({
  render: function () {
    return (
      <div {...this.props} className="modal-footer">
        {this.props.children}
      </div>
    );
  },
});

module.exports = Modal;
