import axios from 'axios';
import { IContactFormData, toastNotify } from '.';
import { ICareerData } from '../store/utils/dataTypes';

const axiosApiInstance = axios.create();

// Add a request interceptor
axiosApiInstance.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    if (error.message === 'Network Error') {
      toastNotify(
        'Network Error! Please check your internet connection',
        'error'
      );
    }
    return Promise.reject(error);
  }
);

const API_BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getPortfolioData = () =>
  axiosApiInstance.get<ICareerData>(API_BASE_URL + '/api/portfolio-data', {
    headers: { 'api-key': API_KEY },
  });

export const contactMe = (data: IContactFormData) =>
  axiosApiInstance.post(API_BASE_URL + 'contact', data);
