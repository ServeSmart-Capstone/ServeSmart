import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  categoryColumn: {
    width: '50%',
  },

  category: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    margin: 10,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: 'Roboto',
  },
});

export default styles;
