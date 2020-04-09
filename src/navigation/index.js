import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import AuthenticationScreen from '../screens/authentication/AuthenticationScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TasksScreen from '../screens/tasks/TasksScreen';
import MenuDrawer from './drawer/MenuDrawer';

const DrawerConfig = {
  drawerWidth: Dimensions.get('window').width * 0.35,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  },
  navigationOptions: {
    headerShown: false,
  },
};

const HomeNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Tasks: { screen: TasksScreen },
    Settings: { screen: SettingsScreen }
  },
  DrawerConfig,
);

const AppNavigator = createStackNavigator(
  {
    Authentication: { screen: AuthenticationScreen },
    Home: HomeNavigator
  },
  {
    initalRoute: 'Authentication',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
