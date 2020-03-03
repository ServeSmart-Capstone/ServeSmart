import React, {useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Seat(props) {
  const {value, isActive} = props;
  const [state, setState] = useState(value);

  return (
    <View style={styles.seatContainer}>
      {/* HEADER */}
      <View style={styles.seatHeader}>
        <Text style={styles.seatHeaderText}>Seat {state.seat}</Text>
      </View>

      {/* ITEMS */}
      {state.map(item => (
        <View
          style={[styles.seatItem, isActive ? styles.active : null]}
          key={item.item}>
          <View style={styles.seatItemQuantity}>
            <Text style={styles.seatItemText}>{item.quantity}</Text>
          </View>
          <Text style={styles.seatItemName}>{item.displayName}</Text>
          <Text style={styles.seatItemPrice}>{item.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}

Seat.propTypes = {
  value: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Seat;
