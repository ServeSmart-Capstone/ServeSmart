import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/actions/loginActions';

import NumericKeypad from 'components/keypad/NumericKeypad';
import images from 'assets/images';
import {gradient} from './styles';
import styles from './styles';

const AuthenticationScreen = props => {
  const emplogin = data => {
    props.actions.login(data);
    props.navigation.navigate('Home', {name: data.name, info: props.employee});
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
        <NumericKeypad login={emplogin} />
      </View>
    </View>
  );
};

AuthenticationScreen.navigationOptions = {
  headerShown: false,
};

AuthenticationScreen.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const storeData = state.loginReducer;

  return {
    employee: {
      id: storeData.employee.id,
      name: storeData.employee.name,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticationScreen);
