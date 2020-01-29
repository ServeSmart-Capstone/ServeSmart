import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

const NumericKeypad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.idDisplay}>
        <Text style={styles.idNumber}>8745</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonRow}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonRow}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonRow}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default NumericKeypad;
