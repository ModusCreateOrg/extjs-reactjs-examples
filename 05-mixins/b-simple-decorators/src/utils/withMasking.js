import React from 'react';

const style = {
  wrap: {
    display: 'inline-block',
    position: 'relative'
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, .3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  msg: {
    padding: '8px 16px',
    border: '1px solid #555',
    background: 'rgba(0, 0, 0, .1)',
    color: '#333'
  }
};

function withMasking(WrappedComponent) {
    return class extends React.Component {
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
        const { onBeforeLoad, onLoad, props } = this;
        const methodProps = { onBeforeLoad, onLoad };
        const { mask, maskMsg } = this.state;
       
        return (
          <div style={style.wrap}>
            <WrappedComponent {...methodProps} {...props} />
            {mask && <div style={style.modal}>
              {maskMsg && <div style={style.msg}>{maskMsg}</div>}
            </div>}
          </div>
        );
      }
    }
  }
  
  export default withMasking;