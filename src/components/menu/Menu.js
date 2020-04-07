import React, {useState} from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import Beverages from './beverages/Beverages';
import PropTypes from 'prop-types';
import colors from 'assets/colors';
import styles from './styles';

function Menu() {
  const [visibleSection, setVisibleSection] = useState('categories');
  const menuCategories = [
    'Beverages',
    'Wine',
    'Salads',
    'Sandwiches',
    'Entrees',
    'Sides',
    'Desserts',
    'Specials',
  ];

  const renderMenuSection = () => {
    switch (visibleSection) {
      case 'Beverages':
        return <Beverages style={{height: '100%'}} />;
      default:
        return menuCategories.map(category => (
          <View style={styles.categoryContainer} key={category}>
            <TouchableHighlight
              style={styles.category}
              onPress={() => setVisibleSection(category.toString())}
              underlayColor={colors.lightGray}>
              <Text style={styles.buttonText}>{category}</Text>
            </TouchableHighlight>
          </View>
        ));
    }
  };

  return <View style={styles.container}>{renderMenuSection()}</View>;
}

Menu.propTypes = {};

export default Menu;
