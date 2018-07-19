import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
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