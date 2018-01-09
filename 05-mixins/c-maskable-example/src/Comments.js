import React, {Component} from 'react'
import maskable from './maskable'

@maskable
class Comments extends Component {
 componentDidMount () {
   this.load();
 }
 load () {
   // fetch remote content for this component
   // call onLoadEnd when done
   // we’re faking the request with a setTimeout() to simulate the
   // round trip time
	setTimeout(() => {
	  this.onLoadEnd()
     }, 1000); // 1 second
 }
 onLoadEnd () {}
 render () {
   return <div style={{width: "200px", height: "200px" }}></div>;
 }
}

export default Comments;
