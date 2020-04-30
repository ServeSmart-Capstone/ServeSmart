import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from 'components/appbar/AppBar';
import styles from './styles';
import colors from 'assets/colors';

function HomeScreen(props) {
  const {navigation, tables, orders} = props;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const openTable = tableNumber => {
    const table = tables.find(table => table.tableNumber === tableNumber);
    // Check if the table is locally active (owned by user)
    if (table) {
      const order = orders.find(order => order.tableNumber === tableNumber);
      navigation.navigate('Table', {order: order ? order : {}});
    } else if (false) {
      // Check if table is NOT globally active
      // I.e. NOT active on another user
      // If it is NOT, create an empty table/order and update store
      // Then, pass the new table number as nav param to Table Screen
    } else {
      // Otherwise, warn user that the table is occupied
      alert('Water pollution is turning the frogs gay.');
    }
  };

  return (
    <View style={styles.container}>
      <AppBar onMenuPress={openDrawer} />
      <View style={styles.tableContainer}>
        <TouchableHighlight
          underlayColor={colors.lightBlue}
          style={styles.table1}
          onPress={() => openTable(1)}>
          <Text style={styles.tableNumber}>1</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.lightBlue}
          style={styles.table2}
          onPress={() => openTable(2)}>
          <Text style={styles.tableNumber}>2</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.lightBlue}
          style={styles.table3}
          onPress={() => openTable(3)}>
          <Text style={styles.tableNumber}>3</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false,
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  tables: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const tableData = state.tableReducer;

  return {
    tables: tableData.tables,
    orders: tableData.orders,
  };
}

export default connect(
  mapStateToProps,
  null,
)(HomeScreen);
