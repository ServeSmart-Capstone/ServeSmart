import React from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import {ImageBackground, Text, TouchableHighlight, View} from 'react-native';
// import * as loginActions from '../../redux/actions/loginActions';
// import NumericKeypad from '../../components/keypad/NumericKeypad';
import images from 'assets/images';
import styles from './styles';

const AuthenticationScreen = props => {
  // const openKeypad = event => {
  //   event.preventDefault();
  //   props.actions.toggleKeypad(true);
  // };

  // const closeKeypad = () => {
  //   props.actions.toggleKeypad(false);
  // };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.restaurantName}>Restaurant Name</Text>
      </View>

      {/* SIGN IN BUTTON */}
      <TouchableHighlight style={styles.loginButton} underlayColor="gray">
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableHighlight>

      {/* IMAGE BACKGROUND */}
      <ImageBackground
        style={styles.image}
        source={images.auth_screen_background}
      />

      {/* KEYPAD */}
      {/* <Dialog open={props.keypad.isOpen} onClose={closeKeypad}>
        <NumericKeypad />
      </Dialog> */}
    </View>
  );
};

// AuthenticationScreen.propTypes = {
//   keypad: PropTypes.shape({
//     isOpen: PropTypes.bool.isRequired,
//   }).isRequired,
//   actions: PropTypes.object.isRequired,
// };

// function mapStateToProps(state) {
//   const storeData = state.loginReducer;

//   return {
//     keypad: {
//       isOpen: storeData.keypad.isOpen,
//     },
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(loginActions, dispatch),
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AuthenticationScreen);

export default AuthenticationScreen;
