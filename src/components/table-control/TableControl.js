import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function TableControl(props) {
  const {activeSeat, placeOrder} = props;

  return activeSeat.number ? (
    <>
      <TouchableHighlight
        style={styles.addItemButton}
        onPress={() =>
          placeOrder([
            {
              item: 'Test',
              displayName: 'Test',
              quantity: 1,
              price: 0.0,
            },
          ])
        }>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableHighlight>
      <Text>{JSON.stringify(activeSeat)}</Text>
    </>
  ) : (
    <Text>Select a Seat </Text>
  );
}

TableControl.propTypes = {
  activeSeat: PropTypes.object.isRequired,
  placeOrder: PropTypes.func.isRequired,
};

export default TableControl;
