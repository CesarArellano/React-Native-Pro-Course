import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const FullScreenLoader = () => {
  return (
    <View style={styles.fullContainer}>
      <ActivityIndicator size={50} />
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
