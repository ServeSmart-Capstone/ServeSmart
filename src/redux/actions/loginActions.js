import * as types from 'constants/actionTypes';

export function login(employeeData) {
  return {type: types.LOGIN, employeeData};
}
