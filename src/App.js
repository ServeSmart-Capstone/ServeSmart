import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/configureStore';

import AuthenticationScreen from './screens/authentication/AuthenticationScreen';
import HomeScreen from './screens/home/HomeScreen';

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    Authentication: {screen: AuthenticationScreen},
    Home: {screen: HomeScreen},
  },
  {
    initalRoute: 'HomeScreen',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  );
}
