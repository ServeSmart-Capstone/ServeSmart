import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import colors from 'assets/colors';
import styles from './styles';

function Menu() {
  return (
    <View style={styles.container}>
      {/* COLUMN 1 */}
      <View style={styles.categoryColumn}>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Beverages</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Salads</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Entrees</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Desserts</Text>
        </TouchableHighlight>
      </View>

      {/* COLUMN 2 */}
      <View style={styles.categoryColumn}>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Wine</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Sandwiches</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Sides</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.category}
          onPress={() => {}}
          underlayColor={colors.lightGray}>
          <Text style={styles.buttonText}>Specials</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

Menu.propTypes = {};

export default Menu;
