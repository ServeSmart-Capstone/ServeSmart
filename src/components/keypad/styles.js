import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderColor: colors.white,
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 0.9,
    padding: 10,
    width: 260,
  },

  idDisplay: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
  },

  idNumber: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
  },
  buttonsContainer: {
    padding: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.black,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 15,
    backgroundColor: colors.white,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
  },
});

export default styles;
