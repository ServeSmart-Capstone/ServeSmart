import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import KeypadButton from './KeypadButton';
import styles from './styles';
import colors from 'assets/colors';
import {auth, db} from 'constants/firebase'

const NumericKeypad = () => {
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
    //event.preventDefault();
    // Navigate to Home
    let userRef = db.collection('users').doc(keypadEntry);
    let getDoc = userRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        auth.signInWithEmailAndPassword(doc.data().email, keypadEntry).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Bad login\n" + errorCode +"\n" + errorMessage)
        });
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
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

export default NumericKeypad;
