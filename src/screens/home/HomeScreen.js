import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const HomeScreen = props => {
  console.log(props);
  return (
    <View>
      <Text>
        {`Signed in ${JSON.stringify(props.navigation.getParam('info'))}`}
      </Text>
    </View>
  );
};

HomeScreen.navigationOptions = ({navigation}) => {
  return {
    title: `ServeSmart - ${navigation.getParam('name')}`,
  };
};

HomeScreen.propTypes = {};

export default HomeScreen;
