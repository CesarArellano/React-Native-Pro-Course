import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomMap} from '../../components/maps/Map';
import {getCurrentLocation} from '../../../actions/location/location';
import {Location} from '../../../infrastructure/interfaces/location';

export const MapsScreen = () => {
  getCurrentLocation().then(location => {
    console.log({location});
  });

  return <View style={styles.fullContainer}>{/* <CustomMap /> */}</View>;
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
});
