import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import * as loginActions from '../../redux/actions/loginActions';
import NumericKeypad from 'components/keypad/NumericKeypad';
import images from 'assets/images';
import {gradient} from './styles';
import styles from './styles';

const AuthenticationScreen = props => {
  return (
    <View style={styles.container}>
      {/* IMAGE BACKGROUND */}
      <ImageBackground
        style={styles.imageBackground}
        source={images.authscreen_background}
      />

      {/* HEADER */}
      <LinearGradient
        style={styles.header}
        colors={gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.hero}>
          <Text style={styles.heroText}>ServeSmart</Text>
        </View>
      </LinearGradient>

      {/* KEYPAD */}
      <View style={styles.keypadContainer}>
        <NumericKeypad />
      </View>
    </View>
  );
};

AuthenticationScreen.propTypes = {};

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
