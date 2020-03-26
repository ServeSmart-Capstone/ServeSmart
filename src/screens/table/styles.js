import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

export const gradient = [colors.lightGray, colors.white];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
  },

  imageBackground: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },

  orderList: {
    width: 375,
    backgroundColor: colors.white,
    opacity: 0.87,
    overflow: 'hidden',
  },

  tableControls: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.white,
  },

  quickControlBar: {
    height: 80,
    flexDirection: 'row',
  },

  quickControlContainer: {
    width: '20%',
    borderWidth: 1,
    borderColor: colors.darkGray,
  },

  quickControlButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  quickControlText: {
    fontSize: 16,
  },
});

export default styles;
