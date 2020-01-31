import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import AuthenticationScreen from '../screens/authentication/AuthenticationScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TasksScreen from '../screens/tasks/TasksScreen';

const HomeNavigator = createDrawerNavigator({
  HomeScreen,
  TasksScreen,
});

HomeNavigator.navigationOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Authentication: {screen: AuthenticationScreen},
    Home: {screen: HomeNavigator},
  },
  {
    initalRoute: 'Authentication',
  },
);

export default AppNavigator;
