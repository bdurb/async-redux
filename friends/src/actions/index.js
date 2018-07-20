import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ERROR = 'ERROR';

export const getFriends = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/api/friends')
      .then(res => {
        dispatch({type: GET_FRIENDS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
    }
}

export const addFriend = friend => {
  return dispatch => {
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then(({data}) => {
        dispatch({type: ADD_FRIEND, payload: data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
}