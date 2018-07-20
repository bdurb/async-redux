import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends Component {
  state = { 
    name: '',
    age: '',
    email: ''
   }

   handleInputChange = e => {
     this.setState({ [e.target.name]: e.target.value })
   }

   handleSubmitFriend = () => {
     const {name, age, email} = this.state
     this.props.addFriend({name, age, email})
     this.setState({name: '', age: '', email: ''})
   }


  render() { 
    return (
      <form>
        <input onChange={this.handleInputChange} placeholder="name" name="name" value={this.state.name} />
        <input onChange={this.handleInputChange} placeholder="age" name="age" value={this.state.age} />
        <input onChange={this.handleInputChange} placeholder="email" name="email" value={this.state.email} />
        <button onClick={()=> this.handleSubmitFriend()}>Add Friend!</button>
      </form>
      
    );
  }
}
 
export default connect(null, { addFriend })(FriendForm);