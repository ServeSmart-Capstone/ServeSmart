import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  seatHeader: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlue,
  },

  seatHeaderText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.black,
  },

  seatItem: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
  },

  active: {
    backgroundColor: colors.lightGray,
  },

  seatItemText: {
    fontSize: 18,
  },

  seatItemQuantity: {
    flex: 1,
    padding: 2,
    alignItems: 'center',
  },

  seatItemName: {
    flex: 6,
    flexDirection: 'column',
    fontSize: 18,
    padding: 2,
  },

  seatItemPrice: {
    flex: 1.5,
    fontSize: 18,
    padding: 2,
    paddingRight: 10,
  },
});

export default styles;
