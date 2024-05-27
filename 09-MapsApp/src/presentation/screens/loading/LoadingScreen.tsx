import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LoadingScreen = () => {
  return (
    <View>
      <Text style={styles.header}>LoadingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'black',
  },
});
