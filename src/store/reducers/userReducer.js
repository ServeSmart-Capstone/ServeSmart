import * as types from 'constants/actionTypes';

const initialState = {
  user: {
    id: '',
    name: '',
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
        },
      };
    }

    default:
      return state;
  }
}
