import * as types from 'constants/actionTypes';

const initialState = {
  employee: {
    id: '',
    name: '',
  },
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    //Successful login
    case types.LOGIN: {
      return {
        ...state,
        employee: {
          ...state.employee,
          id: action.employeeData.id,
          name: action.employeeData.name,
        },
      };
    }

    default:
      return state;
  }
}
