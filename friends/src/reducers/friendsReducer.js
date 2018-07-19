import { GET_FRIENDS } from '../actions';

const initialState = {
  friends: []
}
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return [...state]
  }
};