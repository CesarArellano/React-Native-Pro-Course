import React from 'react';
import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/presentation/screens/';

const MainApp = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CounterScreen />
    </SafeAreaView>
  );
};

export default MainApp;
