import React from 'react';
import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Beverages() {
  const beverages = [
    'Water',
    'Iced Tea',
    'Sweet Tea',
    'Coke',
    'Diet Coke',
    'Pepsi',
    'Sprite',
    'Dr. Pepper',
    'Lemonade',
    'Coffee',
    'Espresso',
    'Americano',
  ];

  const renderBeverages = () => {
    return beverages.map(beverage => (
      <View style={styles.beverageContainer} key={beverage}>
        <TouchableHighlight style={styles.beverage}>
          <Text style={styles.buttonText}>{beverage}</Text>
        </TouchableHighlight>
      </View>
    ));
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderBeverages()}</View>
    </ScrollView>
  );
}

Beverages.propTypes = {};

export default Beverages;
