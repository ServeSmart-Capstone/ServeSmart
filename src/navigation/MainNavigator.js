import {createStackNavigator} from 'react-navigation-stack';
import AuthenticationScreen from '../screens/authentication/AuthenticationScreen';
import HomeNavigator from '../navigation/HomeNavigator';

const MainNavigator = createStackNavigator(
  {
    Authentication: {screen: AuthenticationScreen},
    Home: {screen: HomeNavigator},
  },
  {
    initalRoute: 'Authentication',
  },
);

export default MainNavigator;
