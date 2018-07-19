import React, { Component } from 'react';
import Friend from './Friend';

class FriendList extends Component {


  componentDidMount() {
    this.props.getFriends();
  }

  
  render() { 
    return (
      {this.props.frends.map(friend => {
        return <Friend key={friend.email} friend={friend} />
      })}
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}
 
export default connect(mapStateToProps, { getFriends })(FriendList);