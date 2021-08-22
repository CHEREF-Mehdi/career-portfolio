import { combineReducers } from 'redux';
import aboutReducer from './about';
import contactReducer from './contact';

const rootReducer = combineReducers({
  about: aboutReducer,
  contact: contactReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
