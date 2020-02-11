import React from 'react';
import {FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Seat from './Seat';

function OrderList(props) {
  const {order} = props;

  return (
    <FlatList
      style={styles.container}
      data={order.seats}
      renderItem={({item}) => <Seat seat={item} />}
      keyExtractor={item => item.id}
    />
  );
}

OrderList.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderList;
