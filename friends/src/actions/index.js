import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = friends => {
  return dispatch => {
    axios
      .get('http://localhost:5000/friends')
      .then(data => {
        dispatch({type: GET_FRIENDS, payload: data.friends})
      })
  }
}