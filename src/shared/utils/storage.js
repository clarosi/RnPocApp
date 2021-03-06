import AsyncStorage from '@react-native-community/async-storage';

import { TOKEN_NAME } from '../strings';

export const storage = async ({ type, key = TOKEN_NAME, value }) => {
  let result = '';

  switch (type) {
    case 'GET':
      result = await AsyncStorage.getItem(key);
      break;
    case 'SET':
      result = await AsyncStorage.setItem(key, value);
      break;
    case 'REMOVE':
      result = await AsyncStorage.removeItem(key);
      break;
    default:
      result = await AsyncStorage.getItem(key);
      break;
  }

  return result;
  //if (result !== null) return result;
};
