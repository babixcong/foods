import axios, {CreateAxiosDefaults} from 'axios';

const config: CreateAxiosDefaults = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
