import axios from 'axios';
import {BASE_URL, TIMEOUT} from '../const';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    if (response && response.status === 401) {

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
