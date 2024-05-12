import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.purpleBox}>Hola</Text>
      <Text style={styles.purpleBox}>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 8,
  },
  purpleBox: {
    backgroundColor: 'purple',
    fontSize: 40,
    color: 'white',
    margin: 20,
  },
});
