import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import * as userActions from 'store/actions/userActions';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      <Text style={{fontSize: 28}}>{`Signed in ${JSON.stringify(
        props.user,
      )}`}</Text>
    </View>
  );
};

HomeScreen.navigationOptions = ({navigation}) => ({
  title: `ServeSmart - ${navigation.getParam('name')}`,
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.headerTitleStyle,
  headerTitleAlign: 'center',
  headerLeft: () => null,
});

HomeScreen.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  const storeData = state.userReducer;

  return {
    user: {
      id: storeData.user.id,
      name: storeData.user.name,
    },
  };
}

export default connect(mapStateToProps, null)(HomeScreen);
