import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const MapsScreen = () => {
  return (
    <View style={styles.fullContainer}>
      <Text>MapsScreen</Text>
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
