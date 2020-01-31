import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from 'store/configureStore';
import AppNavigator from './navigation';

const store = configureStore();
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  );
}
