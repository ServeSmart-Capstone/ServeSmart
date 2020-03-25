import React, {useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Seat(props) {
  const {data, isActive} = props;

  return (
    <View style={styles.seatContainer}>
      {/* HEADER */}
      <View style={styles.seatHeader}>
        <Text style={styles.seatHeaderText}>
          {data.seatNumber === 0 ? 'Table' : `Seat ${data.seatNumber}`}
        </Text>
      </View>

      {/* ITEMS */}
      {data.items.map(item => (
        <View
          style={[styles.seatItem, isActive ? styles.active : null]}
          key={item.name}>
          <View style={styles.seatItemQuantity}>
            <Text style={styles.seatItemText}>{item.quantity}</Text>
          </View>
          <Text style={styles.seatItemName}>{item.name}</Text>
          <Text style={styles.seatItemPrice}>{item.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}

Seat.propTypes = {
  data: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Seat;
