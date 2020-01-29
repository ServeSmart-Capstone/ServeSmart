import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthenticationScreen from './screens/authentication/AuthenticationScreen';

const AppNavigator = createStackNavigator({
  Authentication: {
    screen: AuthenticationScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
