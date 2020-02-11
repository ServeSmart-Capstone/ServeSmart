import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGray,
    flexDirection: 'row',
  },

  orderList: {
    width: 375,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.black,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },

  tableControls: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.white,

    marginLeft: 20,
    alignItems: 'center',
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
