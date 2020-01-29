import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import colors from 'assets/colors';
import styles from './styles';

const KeypadButton = props => {
  const {onPress, value} = props;

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(value)}
      underlayColor={colors.lightGreen}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableHighlight>
  );
};

KeypadButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default KeypadButton;
