import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

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

  quickControlButton: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.darkGray,
  },
});

export default styles;
