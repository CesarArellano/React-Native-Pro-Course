import {StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
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
  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const [isShowingPolyline, setIsShowingPolyline] = useState(true);
  const {
    lasKnownLocation,
    getLocation,
    watchLocation,
    clearWatchLocation,
    userLocationList,
  } = useLocationStore();

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

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, [watchLocation, clearWatchLocation]);

  useEffect(() => {
    if (lasKnownLocation && isFollowingUser) {
      moveCameraToLocation(lasKnownLocation);
    }
  }, [lasKnownLocation, isFollowingUser]);

  return (
    <>
      <MapView
        ref={map => (mapRef.current = map!)}
        showsUserLocation={showsUserLocation}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onTouchStart={_ => setIsFollowingUser(false)}
        showsMyLocationButton={false}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      {isShowingPolyline && (
        <Polyline coordinates={userLocationList} strokeWidth={5} />
      )}
      <FAB
        iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setIsShowingPolyline(!isShowingPolyline)}
        style={styles.polylineViewFab}
      />
      <FAB
        iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={styles.trackingUserFab}
      />
      <FAB
        iconName="compass-outline"
        onPress={() => moveToCurrentLocation()}
        style={styles.locationFab}
      />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  polylineViewFab: {
    bottom: 140,
    right: 20,
  },
  locationFab: {
    bottom: 20,
    right: 20,
  },
  trackingUserFab: {
    bottom: 80,
    right: 20,
  },
});
