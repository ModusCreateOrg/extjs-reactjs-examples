import React, { Component } from 'react'

const style = {
  wrap : {
    display  : 'inline-block',
    position : 'relative'
  },
  modal : {
    position       : 'absolute',
    top            : 0,
    left           : 0,
    right          : 0,
    bottom         : 0,
    background     : 'rgba(0, 0, 0, .3)',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center'
  },
  msg : {
    padding    : '8px 16px',
    border     : '1px solid #555',
    background : 'rgba(0, 0, 0, .1)',
    color      : '#333'
  }
};

class Mask extends Component {
  state = {
    mask: this.props.mask,
    maskMsg: this.props.maskMsg
  }
  onBeforeLoad = () => {
    this.setState({
      mask: true,
      maskMsg: 'loading...'
    });
  }
  onLoad = () => {
    this.setState({
      mask: null,
      maskMsg: null
    });
  }
  render() {
    const { onBeforeLoad, onLoad } = this;
    const { mask, maskMsg } = this.state;
   
    return (
      <div style={style.wrap}>
        {this.props.render({onBeforeLoad, onLoad})}
        {mask && <div style={style.modal}>
          {maskMsg && <div style={style.msg}>{maskMsg}</div>}
        </div>}
      </div>
    );
  }
}

export default Mask;
