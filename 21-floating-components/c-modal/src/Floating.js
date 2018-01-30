import React, { Component } from 'react';
// Required to use React portals
import ReactDOM from 'react-dom';
import './Floating.css';

class Floating extends Component {
  state = {
    show: !!this.props.show
  };

  componentWillReceiveProps ({ show }) {
    this.setState({ show });
  }

  handleModalClick = () => {
    this.setState({
      show: false
    });
  };

  render () {
    const { modal, viewport, closeOnModalClick } = this.props;
    const { show } = this.state;
    const isModal = modal ? ' modal' : '';
    const doShow = show ? ' show' : '';
    const clsName = `float-wrap${isModal}${doShow}`;
    const props = {
      onClick: closeOnModalClick ? this.handleModalClick : null
    };
    const float = (
      <div {...props} className={clsName}>
        {this.props.children}
      </div>
    );

    return viewport ? ReactDOM.createPortal(float, document.body) : float;
  }
}

export default Floating;
