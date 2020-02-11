import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function NavLink(props) {
  const {name, to, navigation} = props;

  const navigate = () => {
    navigation.navigate(to);
    navigation.closeDrawer();
  };

  return (
    <TouchableOpacity style={styles.link} onPress={navigate}>
      <Text style={styles.linkText}>{name}</Text>
    </TouchableOpacity>
  );
}

export default NavLink;
