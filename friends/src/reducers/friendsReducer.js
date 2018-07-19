import { GET_FRIENDS, ERROR } from '../actions';

const initialState = {
  friends: []
}
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {...state, friends: action.payload}
    case ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  }
};