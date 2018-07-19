import React, { Component } from 'react';
import Friend from './Friend';

import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendList extends Component {


  componentDidMount() {
    this.props.getFriends();
  }


  render() { 
    return (
      <div>
        {this.props.friends.map(friend => {
          return <Friend key={friend.email} friend={friend} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}
 
export default connect(mapStateToProps, { getFriends })(FriendList);