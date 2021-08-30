import { combineReducers } from 'redux';
import aboutReducer from './about';
import contactReducer from './contact';
import servicesReducer from './myServices';
import resumeReducer from './resume';
import portfolioReducer from './portfolio';
import testemonialReducer from './testimonial';

const rootReducer = combineReducers({
  about: aboutReducer,
  contact: contactReducer,
  services: servicesReducer,
  resume: resumeReducer,
  portfolio: portfolioReducer,
  testimonials: testemonialReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
