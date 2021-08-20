import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

import Routes from './src/routes';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
    <Routes />
  </>
);

export default App;