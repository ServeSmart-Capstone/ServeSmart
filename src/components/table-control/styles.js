import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  addItemButton: {
    width: 100,
    height: 40,
    borderWidth: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.black,
    borderRadius: 20,
    backgroundColor: colors.darkBlue,
  },

  buttonText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Roboto',
  },
});

export default styles;
