import { combineReducers } from 'redux';
import aboutReducer from './about';
import contactReducer from './contact';
import myServices from './myServices';
import resume from './resume';

const rootReducer = combineReducers({
  about: aboutReducer,
  contact: contactReducer,
  services: myServices,
  resume: resume,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
