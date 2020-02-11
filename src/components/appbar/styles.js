import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  headerText: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Roboto',
  },

  menuIcon: {
    position: 'absolute',
    padding: 15,
  },
});

export default styles;
