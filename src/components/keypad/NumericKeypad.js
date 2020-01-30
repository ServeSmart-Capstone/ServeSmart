import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';

import KeypadButton from './KeypadButton';
import styles from './styles';
import colors from 'assets/colors';

const NumericKeypad = props => {
  const [keypadEntry, setKeypadEntry] = useState('Enter ID');

  const keyPressed = value => {
    const newEntry =
      keypadEntry === 'Enter ID' ? value : keypadEntry.concat(value);
    setKeypadEntry(newEntry);
  };

  const clearEntry = () => {
    setKeypadEntry('Enter ID');
  };

  const submitEntry = event => {
    event.preventDefault();
    //const {login} = props.login;

    //Handle authentication here
    if (isNaN(keypadEntry)) {
      //clear pin if invalid
      clearEntry();
    } else {
      //Async obtain user data from DB if valid
      const user = {
        id: keypadEntry,
        name: 'Chase Pareti',
      };

      //log user in
      props.login(user);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.idDisplay}>
        <Text
          style={
            keypadEntry === 'Enter ID'
              ? [styles.idNumber, {color: colors.darkGray}]
              : styles.idNumber
          }>
          {keypadEntry}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <KeypadButton onPress={keyPressed} value="1" />
          <KeypadButton onPress={keyPressed} value="2" />
          <KeypadButton onPress={keyPressed} value="3" />
        </View>

        <View style={styles.buttonRow}>
          <KeypadButton onPress={keyPressed} value="4" />
          <KeypadButton onPress={keyPressed} value="5" />
          <KeypadButton onPress={keyPressed} value="6" />
        </View>

        <View style={styles.buttonRow}>
          <KeypadButton onPress={keyPressed} value="7" />
          <KeypadButton onPress={keyPressed} value="8" />
          <KeypadButton onPress={keyPressed} value="9" />
        </View>

        <View style={styles.buttonRow}>
          <TouchableHighlight
            style={styles.button}
            onPress={clearEntry}
            underlayColor={colors.lightGreen}>
            <Text style={styles.buttonText}>CR</Text>
          </TouchableHighlight>
          <KeypadButton onPress={keyPressed} value="0" />
          <TouchableHighlight
            style={styles.button}
            onPress={submitEntry}
            underlayColor={colors.lightGreen}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

NumericKeypad.propTypes = {
  login: PropTypes.func.isRequired,
};

export default NumericKeypad;
