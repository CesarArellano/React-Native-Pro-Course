import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomMap} from '../../components/maps/Map';

export const MapsScreen = () => {
  return (
    <View style={styles.fullContainer}>
      <CustomMap />
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
});
