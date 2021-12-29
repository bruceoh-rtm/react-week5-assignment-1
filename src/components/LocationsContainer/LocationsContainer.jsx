import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Locations from '../Locations/Locations';
import { setLocations, fetchLocations } from '../../reducer/actions';

export default function LocationsContainer() {
  const locations = useSelector((store) => store.locations);
  const dispatch = useDispatch();
  const handleLocation = (location) => {
    dispatch(setLocations(location));
  };

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  return (
    <Locations
      locations={locations}
      onClick={handleLocation}
    />
  );
}
