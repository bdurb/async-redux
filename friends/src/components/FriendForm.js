import React, { Component } from 'react';

class FriendForm extends Component {
  state = { 
    name: '',
    age: '',
    email: ''
   }
  render() { 
    return (
      <h1>this is a friend form yo!</h1>
    );
  }
}
 
export default FriendForm;