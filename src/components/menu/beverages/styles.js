import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  beverageContainer: {
    height: 90,
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  beverage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: 'Roboto',
  },
});

export default styles;
