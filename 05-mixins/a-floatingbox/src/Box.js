import React from 'react'

function canFloat (WrappedComponent) {
 return class Enhanced extends WrappedComponent {
   float () {
     this.setState({
       cls: 'floating'
     });
   }
  
   render () {
     return super.render();
   }
 }
}

class Box extends React.Component {
  state = {}
  componentWillMount() {
    const { float } = this.props;
    
    if (float) {
      this.float();
    }
  }
  
  render () {
    return <div className={this.state.cls}>My Box</div>;
  }
}
export default canFloat(Box);

