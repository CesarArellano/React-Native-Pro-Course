import {
  PERMISSIONS,
  PermissionStatus as RNPermissionStatus,
  check,
  openSettings,
  request,
} from 'react-native-permissions';
import {PermissionStatus} from '../../infrastructure/interfaces/permissions';
import {Platform} from 'react-native';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable';

    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Unsupported platform');
    }

    if (status === 'blocked') {
      await openSettings();
      return checkLocationPermission();
    }

    return permissionMapper(status);
  };

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermissionStatus = 'unavailable';

  if (Platform.OS === 'ios') {
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Unsupported platform');
  }

  return permissionMapper(status);
};

const permissionMapper = (status: RNPermissionStatus): PermissionStatus => {
  const permissionRecord: Record<RNPermissionStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'blocked',
    unavailable: 'unavailable',
    limited: 'limited',
  };

  return permissionRecord[status] ?? 'unavailable';
};
