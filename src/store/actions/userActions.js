import * as types from 'constants/actionTypes';

export function loadUserData(userData) {
  return {type: types.LOAD_USER_DATA, userData};
}
