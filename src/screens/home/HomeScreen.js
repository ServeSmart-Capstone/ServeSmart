import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import AppBar from 'components/appbar/AppBar';
import styles from './styles';
import colors from 'assets/colors';


function HomeScreen(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <AppBar onMenuPress={openDrawer} />
      <View style={styles.tableContainer}>
        <TouchableHighlight
          underlayColor={colors.lightBlue}
          style={styles.table1}>
          <Text style={styles.tableNumber}>1</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.lightBlue}
          style={styles.table2}>
          <Text style={styles.tableNumber}>2</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.lightBlue}
          style={styles.table3}>
          <Text style={styles.tableNumber}>3</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
