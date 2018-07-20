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

   handleSubmitFriend = () => {
     const friend = {
       name: this.state.name,
       age: this.state.age,
       email: this.state.email
     }
     this.props.addFriend(friend);
     this.setState({name: '', age: '', email: ''})
   }


  render() { 
    return (
      <form>
        <input placeholder="name" name="name" />
        <input placeholder="age" age="age" />
        <input placeholder="email" age="email" />
        <button onClick={()=> this.handleSubmitFriend}>Add Friend!</button>
      </form>
      
    );
  }
}
 
export default FriendForm;