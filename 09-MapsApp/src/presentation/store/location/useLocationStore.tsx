import {create} from 'zustand';
import {Location} from '../../../infrastructure/interfaces/location';
import {getCurrentLocation} from '../../../actions/location/location';

interface LocationState {
  lasKnownLocation: Location | null;
  getLocation: () => Promise<Location | null>;
}

export const useLocationStore = create<LocationState>()(set => ({
  lasKnownLocation: null,
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({lasKnownLocation: location});
    return location;
  },
}));
