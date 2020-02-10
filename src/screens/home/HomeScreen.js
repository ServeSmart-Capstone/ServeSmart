import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import AppBar from 'components/appbar/AppBar';

function HomeScreen(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View>
      <AppBar onMenuPress={openDrawer} />
      <View
        style={{
          paddingTop: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 24}}>Tables</Text>
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
