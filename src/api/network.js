/* eslint-disable */
import {apiClient} from './env';

export default {
  get: async (url, data, config) => {
    if (config !== undefined) {
      apiClient.setHeaders(config);
    }
    return await apiClient.get(url, data, config);
  },
  post: async (url, data, config) => {
    if (config !== undefined) {
      apiClient.setHeaders(config);
    }

    return await apiClient.post(url, data, config);
  },
};
