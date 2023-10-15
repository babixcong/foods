import axiosInstance from "../configs/axiosInstance";

const GET_FOOD_URL = process.env.REACT_APP_LAMBDA_GET_FOOD_URL ?? '';
const TEST = 'http://sl.local:81/api/v1/ping';

export default {
  getFood() {
    return axiosInstance.get(GET_FOOD_URL);
  },
};
