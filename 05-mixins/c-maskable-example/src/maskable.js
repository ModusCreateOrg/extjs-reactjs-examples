import React from 'react'

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

function maskable(WrappedComponent) {
 return class Enhancer extends WrappedComponent {
   state = {
     mask: this.props.mask,
     maskMsg: this.props.maskMsg
   }
   load () {
     this.setState({
       mask: true,
       maskMsg: 'loading...'
     });
     super.load();
   }
   onLoadEnd () {
     this.setState({
       mask: null,
       maskMsg: null
     });
     super.onLoadEnd();
   }
   render() {
     const { mask, maskMsg } = this.state;
    
     return (
       <div style={style.wrap}>
         {super.render()}
         {mask && <div style={style.modal}>
           {maskMsg && <div style={style.msg}>{maskMsg}</div>}
         </div>}
       </div>
     );
   }
 }
}

export default maskable;
