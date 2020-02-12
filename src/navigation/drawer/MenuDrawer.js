import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import NavLink from './NavLink';
import images from 'assets/images';
import styles from './styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function MenuDrawer(props) {
  const {navigation, user} = props;
  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profileImage} source={images.waiter_icon} />
        <Text style={styles.profileText}>Hello, {user.name}</Text>
      </View>

      <ScrollView style={styles.linkList}>
        <NavLink name="My Tables" to="Home" navigation={navigation} />
        <NavLink name="Current Tasks" to="Tasks" navigation={navigation} />
        <NavLink name="Settings" to="Settings" navigation={navigation} />
        <NavLink name="Exit" to="Authentication" navigation={navigation} />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.description}>ServeSmart</Text>
        <Text style={styles.version}>v1.0</Text>
      </View>
    </View>
  );
}

MenuDrawer.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  const storeData = state.userReducer;

  return {
    user: {
      name: storeData.user.name,
      id: storeData.user.id,
      email: storeData.user.email
    },
  };
}

export default connect(mapStateToProps, null)(MenuDrawer);
