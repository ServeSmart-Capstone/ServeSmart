import React from 'react';
import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import OrderList from 'components/order-list/OrderList';

function TableScreen(props) {
  const {navigation} = props;
  const table = navigation.getParam('table');
  const order = navigation.getParam('order');

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <OrderList order={order} />
      </View>

      <View style={styles.tableControls}>
        <TouchableHighlight style={styles.addItemButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableHighlight>
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
