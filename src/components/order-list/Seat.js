import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './styles';

function Seat(props) {
  const {seat} = props;

  return (
    <View style={styles.seatContainer}>
      <View style={styles.seatHeader}>
        <Text style={styles.seatHeaderText}>Seat {seat.id}</Text>
      </View>
      {seat.items.map(item => (
        <View style={styles.seatItem} key={item.item}>
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
  seat: PropTypes.object.isRequired,
};

export default Seat;
