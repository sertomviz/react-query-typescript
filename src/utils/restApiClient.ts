import { makeUseAxios, UseAxios } from 'axios-hooks';
import axios from 'axios';
import config from '../config/config';

export const useRestApi: UseAxios = makeUseAxios({
  axios: axios.create({
    baseURL: config.apiURL,
  }),
});
