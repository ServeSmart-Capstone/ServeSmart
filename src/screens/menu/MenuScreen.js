import React from 'react';
import {Text, View} from 'react-native';
import AppBar from 'components/appbar/AppBar';
import Menu from 'components/Menu/'

function MenuScreen(props) {
  function openDrawer() {
    props.navigation.openDrawer();
  }

  return (
    <View>
      <AppBar onMenuPress={openDrawer} />
      <View
        style={{
          paddingTop: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 24}}>Tasks</Text>
      </View>
    </View>
  );
}

export default MenuScreen;
