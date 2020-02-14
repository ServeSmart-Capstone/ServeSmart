import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import OrderList from 'components/order-list/OrderList';

function TableScreen(props) {
  const {navigation} = props;
  const [order, setOrder] = useState(navigation.getParam('order'));
  const [activeSeat, setActiveSeat] = useState({});

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <OrderList
          order={order}
          activeSeat={activeSeat}
          onSeatPress={seat => setActiveSeat(seat)}
        />
      </View>

      <View style={styles.tableControls}>
        {activeSeat ? (
          <>
            <TouchableHighlight style={styles.addItemButton} onPress={() => {}}>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableHighlight>
            <Text>{JSON.stringify(activeSeat)}</Text>
          </>
        ) : (
          <Text>Select a seat</Text>
        )}
      </View>

      {/* <Text>{JSON.stringify(table)}</Text>
        <Text>{JSON.stringify(order)}</Text> */}
    </View>
  );
}

TableScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TableScreen;
