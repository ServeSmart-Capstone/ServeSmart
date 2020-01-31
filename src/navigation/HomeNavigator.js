import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../screens/home/HomeScreen';
import TasksScreen from '../screens/tasks/TasksScreen';
import colors from 'assets/colors';

const HomeNavigator = createDrawerNavigator({
  HomeScreen,
  TasksScreen,
});

HomeNavigator.navigationOptions = {
  headerShown: false,
};

export default HomeNavigator;
