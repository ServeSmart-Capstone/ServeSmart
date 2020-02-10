import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

function AppBar(props) {
  const {onMenuPress} = props;

  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <Icon name="md-menu" size={30} onPress={onMenuPress} />
      </View>
      <Text style={styles.headerText}>ServeSmart</Text>
    </View>
  );
}

AppBar.propTypes = {
  onMenuPress: PropTypes.func.isRequired,
};

export default AppBar;
