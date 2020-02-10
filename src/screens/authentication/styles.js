import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

export const gradient = [colors.lightGreen, colors.lightBlue];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    height: 136,
    padding: 18,
  },

  hero: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.lightGreen,
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 3,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },

  heroText: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 42,
    fontStyle: 'normal',
  },

  imageBackground: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },

  keypadContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
