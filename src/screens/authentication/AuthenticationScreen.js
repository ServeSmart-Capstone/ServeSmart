import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from 'store/actions/userActions';

import NumericKeypad from 'components/keypad/NumericKeypad';
import images from 'assets/images';
import {gradient} from './styles';
import styles from './styles';

const AuthenticationScreen = props => {
  const userLogin = user => {
    props.actions.loadUserData(user);
    props.navigation.navigate('Home');
  };

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
        <NumericKeypad login={userLogin} />
      </View>
    </View>
  );
};

AuthenticationScreen.navigationOptions = {
  headerShown: false,
};

AuthenticationScreen.propTypes = {
  actions: PropTypes.shape({
    loadUserData: PropTypes.func.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AuthenticationScreen);
