import * as types from 'constants/actionTypes';

const initialState = {
  user: {
    id: '',
    name: '',
    email: ''
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    //Successful login
    case types.LOAD_USER_DATA: {
      return {
        ...state,
        user: {
          ...state.user,
          id: action.userData.id,
          name: action.userData.name,
          email: action.userData.email
        },
      };
    }

    default:
      return state;
  }
}
