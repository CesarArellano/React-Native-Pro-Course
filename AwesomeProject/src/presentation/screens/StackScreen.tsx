import React from 'react';
import {View, StyleSheet} from 'react-native';

export const StackExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    top: 15,
    left: 15,
  },
  box3: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'green',
    top: 30,
    left: 30,
  },
});
