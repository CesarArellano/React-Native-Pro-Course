import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const LoadingScreen = () => {
  return (
    <View style={styles.fullContainer}>
      <ActivityIndicator size={50} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
