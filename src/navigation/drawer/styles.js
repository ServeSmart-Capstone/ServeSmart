import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profile: {
    height: 160,
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#777777',
    justifyContent: 'flex-start',
    padding: 20,
  },

  profileImage: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },

  profileText: {
    fontSize: 20,
    paddingLeft: 20,
    color: 'white',
    fontFamily: 'Roboto',
  },

  linkList: {
    backgroundColor: 'white',
    paddingTop: 10,
  },

  link: {
    height: 50,
  },

  linkText: {
    fontSize: 20,
    padding: 5,
    paddingLeft: 15,
    margin: 5,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Roboto',
  },

  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },

  description: {
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'Roboto',
  },

  version: {
    marginRight: 20,
    color: 'gray',
    fontFamily: 'Roboto',
  },
});

export default styles;
