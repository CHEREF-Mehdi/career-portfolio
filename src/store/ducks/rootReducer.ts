import { combineReducers } from 'redux';
import { careerReducer } from './careerReducer';
import controleUIReducer from './controlUI';

const rootReducer = combineReducers({
  careerData: careerReducer,
  controleUI: controleUIReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
