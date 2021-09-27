import axios from 'axios';
import { ICareerData } from '../store/dataTypes';

const axiosApiInstance = axios.create();

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const getPortfolioData = axiosApiInstance.get<ICareerData>(
  API_BASE_URL + 'portfolio'
);
