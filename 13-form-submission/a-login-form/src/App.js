import React, { Component } from 'react';

class App extends Component {
 state = {
   username: '',
   password: ''
 }
 onSubmit = (e) => {
   e.preventDefault();
   //   fetch('https://yourserver.url/submit-json', {
   //     method: 'post',
   //     body: JSON.stringify(this.state)
   //   }).then(response => response.json()).then(console.log);
   // Fake a submit.  We just setTimeout() and return a fake result

   setTimeout(() => {
      alert('login successful');
   }, 1000)
 }
 onChange = (e) => {
   const { target: { name, value }} = e;
   this.setState({
     [name]: value
   });
 }
 render () {
   const { state } = this;
   return (
     <form onSubmit={this.onSubmit}>
       <input
         type="text"
         value={state.username.value}
         name="username"
         placeholder="username..."
         onChange={this.onChange}
         required
       />
       <br />
       <input
         type="password"
         value={state.password.value}
         name="password"
         placeholder="password..."
         onChange={this.onChange}
         required
       />
       <br />
       <input type="submit" value="Submit" />
     </form>
   );
 }
}
export default App;

