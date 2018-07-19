import React from 'react';
import './friend.css';

const Friend = props => {
  return (
    <div className="friendCard">
      {props.friend.name}<br/><br/>
      {props.friend.age}<br/><br/>
      {props.friend.email}<br/>
    </div>
  );
}
 
export default Friend;