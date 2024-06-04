import {StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Location} from '../../../infrastructure/interfaces/location';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

export const CustomMap = ({
  showsUserLocation = true,
  initialLocation,
}: Props) => {
  return (
    <>
      <MapView
        showsUserLocation={showsUserLocation}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
