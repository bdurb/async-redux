import React, { Component } from 'react';

class FriendForm extends Component {
  state = { 
    name: '',
    age: '',
    email: ''
   }

   handleInputChange = e => {
     this.setState({[e.target.name]: e.target.value})
   }
  render() { 
    return (
      <form>
        <input placeholder="name" name="name" />
        <input placeholder="age" age="age" />
        <input placeholder="email" age="email" />
        <button>Add Friend!</button>
      </form>
      
    );
  }
}
 
export default FriendForm;