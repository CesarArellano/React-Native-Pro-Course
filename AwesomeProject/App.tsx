import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {HomeworkScreen} from './src/presentation/screens/HomeworkScreen';

const MainApp = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        <HomeworkScreen />
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
