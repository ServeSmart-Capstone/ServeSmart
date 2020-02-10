import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from 'store/configureStore';
import AppContainer from './navigation';

const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  );
}
