import {combineReducers} from 'redux';
import userReducer from './userReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
  userReducer,
  tableReducer,
});

export default rootReducer;
