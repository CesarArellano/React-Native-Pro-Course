import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';

export const PermissionsScreen = () => {
  const {locationStatus, requestLocationPermission} = usePermissionStore();
  return (
    <View style={styles.container}>
      <Text>Enable location</Text>
      <Button
        mode="contained"
        onPress={requestLocationPermission}
        buttonColor="black">
        Activate it
      </Button>
      <Text>Current status: {locationStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});
