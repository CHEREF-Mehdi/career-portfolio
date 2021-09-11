import axios from 'axios';
import { IportfolioState } from '../store/ducks/rootReducer';

const axiosApiInstance = axios.create();

const API_BASE_URL = process.env.REACT_APP_API_URL;
console.log(process.env.GA_TRAKING_ID);

export const getPortfolioData = axiosApiInstance.get<IportfolioState>(
  API_BASE_URL + 'portfolio'
);
