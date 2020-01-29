import {StyleSheet} from 'react-native';

const colors = {
  white: '#ffffff',
  black: '#000000',
  lightGray: '#5d737e',
  lightGreen: '#8acb88',
  lightBlue: '#468c98',
  darkGray: '#575761',
  darkBlue: '#476c9b',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 232,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },

  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

  restaurantName: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    //fontWeight: 700,
    fontSize: 42,
    textTransform: 'uppercase',
    color: colors.black,
  },

  loginButton: {
    width: 405,
    height: 163,
    top: 75,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.lightBlue,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.darkGray,
    borderRadius: 5,
  },

  buttonText: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    //fontWeight: 700,
    fontSize: 24,
    textTransform: 'uppercase',
    color: colors.black,
  },
});

export default styles;
