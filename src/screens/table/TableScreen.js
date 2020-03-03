import React, {useState} from 'react';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as tableActions from 'store/actions/tableActions';

import OrderList from 'components/order-list/OrderList';
import TableControl from 'components/table-control/TableControl';
import styles from './styles';

function TableScreen(props) {
  const {navigation} = props;
  const [order, setOrder] = useState(navigation.getParam('order'));
  const [activeSeat, setActiveSeat] = useState({});

  const placeOrder = items => {
    console.log(items);
    // let updatedItems = order.seats
    //   .find(seat => seat === activeSeat)
    //   .items.concat(items);
    //console.log(updatedItems);
    //setOrder(order.seats.find(seat => seat === activeSeat).items.concat(items));
  };

  return (
    <View style={styles.container}>
      {/* ORDER LIST */}
      <View style={styles.orderList}>
        <OrderList
          order={order}
          activeSeat={activeSeat}
          onSeatPress={seat => setActiveSeat(seat)}
        />
      </View>

      {/* TABLE CONTROLS */}
      <View style={styles.tableControls}>
        <TableControl
          activeSeat={activeSeat}
          placeOrder={items => placeOrder(items)}
        />
      </View>
    </View>
  );
}

TableScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tableActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(TableScreen);
