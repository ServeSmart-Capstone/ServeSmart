import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  headerText: {
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'Roboto',
  },

  menuIcon: {
    position: 'absolute',
    padding: 20,
  },
});

export default styles;
