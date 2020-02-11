import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },

  tableContainer: {
    margin: 5,
    height: '100%',
    backgroundColor: colors.lightGray,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 50,
  },

  tableNumber: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  table1: {
    width: 180,
    height: 360,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

  table2: {
    width: 180,
    height: 180,
    marginTop: 90,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

  table3: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
