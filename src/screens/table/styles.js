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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.white,
    marginLeft: 20,
  },
});

export default styles;
