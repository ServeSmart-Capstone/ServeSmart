import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import AppBar from 'components/appbar/AppBar';
import styles from './styles';
import activeTables from '../../models/activeTables';
import activeOrders from '../../models/activeOrders';
import colors from 'assets/colors';

function HomeScreen(props) {
  const {navigation} = props;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const openTable = tableNumber => {
    const table = activeTables.find(table => table.id === tableNumber);
    const order = activeOrders.find(order => order.id === tableNumber);
    navigation.navigate('Table', {order: order});
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
};

export default HomeScreen;
