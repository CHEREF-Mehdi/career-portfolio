import axios from 'axios';
import { IportfolioState } from '../store/ducks/rootReducer';

const axiosApiInstance = axios.create();

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const getPortfolioData = axiosApiInstance.get<IportfolioState>(
  API_BASE_URL + 'portfolio'
);
