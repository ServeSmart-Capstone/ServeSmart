import React from 'react';
import {Button, Text, View} from 'react-native';

const TasksScreen = props => {
  return (
    <View>
      <Button
        style={{zIndex: 4}}
        title="open drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Text>Tasks Work</Text>
    </View>
  );
};

export default TasksScreen;
