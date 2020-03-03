import * as types from 'constants/actionTypes';
import activeTables from '../../models/activeTables';
import activeOrders from '../../models/activeOrders';

const initialState = {
  tables: activeTables,
  orders: activeOrders,
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
