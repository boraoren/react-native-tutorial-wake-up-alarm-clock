import Geolocation from '@react-native-community/geolocation';
import {useQuery} from 'react-query';

export const useLocation = () => {
  const {data} = useQuery(['get-location'], getCurrentLocation);
  return {location: data};
};

const getCurrentLocation = () => {
  return new Promise((res, rej) => {
    Geolocation.getCurrentPosition(res, rej);
  });
};
