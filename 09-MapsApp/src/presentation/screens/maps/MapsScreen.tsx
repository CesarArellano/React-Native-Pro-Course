import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomMap} from '../../components/maps/Map';
import {useLocationStore} from '../../store/location/useLocationStore';
import {FullScreenLoader} from '../../components/shared/FullScreenLoader';

export const MapsScreen = () => {
  const {lasKnownLocation, getLocation} = useLocationStore();

  useEffect(() => {
    if (lasKnownLocation === null) {
      getLocation();
    }
  });

  if (lasKnownLocation === null) {
    return <FullScreenLoader />;
  }
  return (
    <View style={styles.fullContainer}>
      <CustomMap initialLocation={lasKnownLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
});
