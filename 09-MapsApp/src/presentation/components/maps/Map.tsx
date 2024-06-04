import {StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Location} from '../../../infrastructure/interfaces/location';
import {FAB} from '../shared/FAB';
import {useLocationStore} from '../../store/location/useLocationStore';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

export const CustomMap = ({
  showsUserLocation = true,
  initialLocation,
}: Props) => {
  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<Location>(initialLocation);
  const {lasKnownLocation, getLocation} = useLocationStore();

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.animateCamera({
      center: location,
    });
  };

  const moveToCurrentLocation = async () => {
    if (!lasKnownLocation) {
      moveCameraToLocation(initialLocation);
    }

    const location = await getLocation();

    if (!location) {
      return;
    }
    moveCameraToLocation(location);
  };

  return (
    <>
      <MapView
        ref={map => (mapRef.current = map!)}
        showsUserLocation={showsUserLocation}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsMyLocationButton={false}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <FAB
        iconName="compass-outline"
        onPress={() => moveToCurrentLocation()}
        style={styles.fab}
      />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  fab: {
    bottom: 20,
    right: 20,
  },
});
