// src/App.tsx
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainComponent from './src/components/MainComponent';
import {LogBox} from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
