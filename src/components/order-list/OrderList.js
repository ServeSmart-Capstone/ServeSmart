import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Seat from './Seat';

function OrderList(props) {
  const {order, activeSeat, onSeatPress} = props;

  return (
    <FlatList
      style={styles.container}
      data={order.items}
      renderItem={({item}) => (
        <TouchableHighlight
          underlayColor="#898989"
          onPress={() => {
            onSeatPress(item);
          }}>
          <Seat value={item} isActive={activeSeat.number === item.seat} />
        </TouchableHighlight>
      )}
      keyExtractor={item => item.seat.toString()}
    />
  );
}

OrderList.propTypes = {
  order: PropTypes.object.isRequired,
  activeSeat: PropTypes.object.isRequired,
  onSeatPress: PropTypes.func.isRequired,
};

export default OrderList;
