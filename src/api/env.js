import {create} from 'apisauce';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Google maps api key
export const GOOGLE_MAPS_APIKEY = 'AIzaSyAMHamyBpPLHsWPp0lJlaut4Givugq6q0Q';

export const authConfig = async () => {
  const token = await AsyncStorage.getItem('token');
  console.log(`Bearer ${token}`);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  };
};

export const config = {
  headers: {
    Accept: 'application/json',
  },
};

export const apiClient = create({
  baseURL: `https://partsg.hexaadev.com`,
});
