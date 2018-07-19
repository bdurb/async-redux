import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Your Friends Are Coming...</h1>
        <FriendForm />
        <FriendList />
      </div>
    );
  }
}

export default App;
