import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

export const gradient = [colors.lightGreen, colors.lightGray];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    // backgroundColor: colors.darkGray,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    height: 144,
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
});

export default styles;
