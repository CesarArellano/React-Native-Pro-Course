import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BoxObjectModelScreen} from './src/presentation/screens/';
import {PaperProvider} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';

const MainApp = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainApp;
