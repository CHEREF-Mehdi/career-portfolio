import axios from 'axios';
import { IAppState } from '../store/ducks/rootReducer';

const axiosApiInstance = axios.create();

const API_BASE_URL = 'https://mcheref-portfolio-api.herokuapp.com/api/';
//const API_BASE_URL = 'http://localhost:8080/api/';

export const getPortfolioData = axiosApiInstance.get<IAppState>(
  API_BASE_URL + 'portfolio'
);
