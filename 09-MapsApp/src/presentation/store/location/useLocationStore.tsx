import {create} from 'zustand';
import {Location} from '../../../infrastructure/interfaces/location';
import {
  clearWatchLocation,
  getCurrentLocation,
  watchCurrentLocation,
} from '../../../actions/location/location';

interface LocationState {
  watchId: number | null;
  lasKnownLocation: Location | null;
  userLocations: Location[];
  getLocation: () => Promise<Location | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  watchId: null,
  lasKnownLocation: null,
  userLocations: [],
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({lasKnownLocation: location});
    return location;
  },
  watchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      get().clearWatchLocation();
    }
    const id = watchCurrentLocation(location => {
      set({
        lasKnownLocation: location,
        userLocations: [...get().userLocations, location],
      });
    });
    set({watchId: id});
  },
  clearWatchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      clearWatchLocation(watchId);
    }
  },
}));
