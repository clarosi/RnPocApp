import axios from 'axios';

import { storage } from './index';
import { TOKEN_NAME } from '../strings';

const axiosInstance = axios.create({
  baseURL: __DEV__
    ? 'http://192.168.99.1:4000/'
    : 'https://aqueous-mountain-63457.herokuapp.com/',
  timeout: 9000
});

const errObj = (isError, error) => {
  return { isError, error };
};

export const getRequest = url => {
  return axiosInstance
    .get(url)
    .then(res => res.data)
    .catch(err => errObj(true, err.message));
};

export const postRequest = ({ url, data = {}, method = 'POST' }) => {
  return axiosInstance
    .request({
      method,
      url,
      data,
      headers: { [`${TOKEN_NAME}`]: storage({ type: 'GET' }) }
    })
    .then(res => res.data)
    .catch(err => errObj(true, err));
};
