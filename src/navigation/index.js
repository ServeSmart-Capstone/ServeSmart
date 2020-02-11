import React from 'react';
import {Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import AuthenticationScreen from '../screens/authentication/AuthenticationScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TableScreen from '../screens/table/TableScreen';
import TasksScreen from '../screens/tasks/TasksScreen';
import MenuDrawer from './drawer/MenuDrawer';

const DrawerConfig = {
  drawerWidth: Dimensions.get('window').width * 0.35,
  contentComponent: ({navigation}) => {
    return <MenuDrawer navigation={navigation} />;
  },
  navigationOptions: {
    headerShown: false,
  },
};

const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Table: {screen: TableScreen},
  },
  {
    initalRoute: 'Home',
  },
);

const HomeNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeStack},
    Tasks: {screen: TasksScreen},
  },
  DrawerConfig,
);

const AppNavigator = createStackNavigator(
  {
    Authentication: {screen: AuthenticationScreen},
    Home: HomeNavigator,
  },
  {
    initalRoute: 'Authentication',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
