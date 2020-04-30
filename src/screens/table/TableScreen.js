import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as tableActions from 'store/actions/tableActions';

import Menu from 'components/menu/Menu';
import Seat from './seat/Seat';
import images from 'assets/images';
import colors from 'assets/colors';
import {gradient} from './styles';
import styles from './styles';

function TableScreen(props) {
  const {navigation} = props;
  const [order, setOrder] = useState(navigation.getParam('order'));
  const [nav, setNav] = useState(navigation.getParam('navigation'));
  const [activeSeat, setActiveSeat] = useState({});

  const seatHasBeenSelected = () => {
    return Object.keys(activeSeat).length > 0;
  };

  const containsItem = (seat, item) => {
    return seat.items.some(existingItem => existingItem.name === item.name);
  };

  const incrementQuantity = (seat, item) => {
    seat.items.find(existingItem => existingItem === item).quantity++;
  };

  const addItem = (seat, item) => {
    seat.items.push(item);
  };

  const placeOrder = () => {
    // If there is a highlighted seat
    if (seatHasBeenSelected()) {
      // Get the requested item from the button press
      const requestedItem = {
        name: 'Pizza',
        price: 5.99,
        quantity: 1,
      };

      // Check if the item already exists on the highlighted seat
      if (containsItem(activeSeat, requestedItem)) {
        // If yes, increment the quantity
        incrementQuantity(activeSeat, requestedItem);
        console.log('Item exists. Quantity incremented');
      } else {
        //If no, push a new item to the seat
        addItem(activeSeat, requestedItem);
        console.log('New item added to seat');
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* IMAGE BACKGROUND */}
      <ImageBackground
        style={styles.imageBackground}
        source={images.authscreen_background}
      />

      {/* ORDER LIST */}
      <View style={styles.orderList}>
        <FlatList
          data={order.seats}
          renderItem={({item}) => {
            return (
              <TouchableHighlight
                underlayColor="#898989"
                onPress={() => setActiveSeat(item)}>
                <Seat data={item} isActive={activeSeat === item} />
              </TouchableHighlight>
            );
          }}
          keyExtractor={item => item.seatNumber.toString()}
        />
      </View>

      {/* TABLE CONTROLS */}
      <View style={styles.tableControls}>
        <View style={styles.quickControlBar}>
          <LinearGradient
            style={styles.quickControlContainer}
            colors={gradient}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}>
            <TouchableHighlight
              style={styles.quickControlButton}
              underlayColor={colors.lightGreen}
              onPress={() => {}}>
              <Text style={styles.quickControlText}>Duplicate</Text>
            </TouchableHighlight>
          </LinearGradient>

          <LinearGradient
            style={styles.quickControlContainer}
            colors={gradient}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}>
            <TouchableHighlight
              style={styles.quickControlButton}
              underlayColor={colors.lightGreen}
              onPress={() => navigation.openDrawer()}>
              <Text style={styles.quickControlText}>Remove</Text>
            </TouchableHighlight>
          </LinearGradient>

          <LinearGradient
            style={styles.quickControlContainer}
            colors={gradient}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}>
            <TouchableHighlight
              style={styles.quickControlButton}
              underlayColor={colors.lightGreen}
              onPress={() => {}}>
              <Text style={styles.quickControlText}>Split Check</Text>
            </TouchableHighlight>
          </LinearGradient>

          <LinearGradient
            style={styles.quickControlContainer}
            colors={gradient}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}>
            <TouchableHighlight
              style={styles.quickControlButton}
              underlayColor={colors.lightGreen}
              onPress={() => {}}>
              <Text style={styles.quickControlText}>Apply Promo</Text>
            </TouchableHighlight>
          </LinearGradient>

          <LinearGradient
            style={styles.quickControlContainer}
            colors={gradient}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}>
            <TouchableHighlight
              style={styles.quickControlButton}
              underlayColor={colors.lightGreen}
              onPress={() => {}}>
              <Text style={styles.quickControlText}>Payout</Text>
            </TouchableHighlight>
          </LinearGradient>
        </View>

        <ScrollView>
          <Menu />
        </ScrollView>
      </View>
    </View>
  );
}

TableScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tableActions, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(TableScreen);
