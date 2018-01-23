import React, { Component } from 'react';

class App extends Component {
 state = {
   username: '',
   password: ''
 }
 handleSubmit = (e) => {
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
 handleChange = (e) => {
   const { target: { name, value }} = e;
   this.setState({
     [name]: value
   });
 }
 render () {
   const { state } = this;
   return (
     <form onSubmit={this.handleSubmit}>
       <input
         type="text"
         value={state.username.value}
         name="username"
         placeholder="username..."
         onChange={this.handleChange}
         required
       />
       <br />
       <input
         type="password"
         value={state.password.value}
         name="password"
         placeholder="password..."
         onChange={this.handleChange}
         required
       />
       <br />
       <input type="submit" value="Submit" />
     </form>
   );
 }
}
export default App;

