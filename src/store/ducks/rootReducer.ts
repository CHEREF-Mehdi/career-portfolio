import { combineReducers } from 'redux';
import aboutReducer from './about';
import contactReducer from './contact';
import servicesReducer from './myServices';
import resumeReducer from './resume';
import portfolioReducer from './portfolio';
import testemonialReducer from './testimonial';
import controleUIReducer from './controlUI';

const careerReducer = combineReducers({
  about: aboutReducer,
  contact: contactReducer,
  services: servicesReducer,
  resume: resumeReducer,
  portfolio: portfolioReducer,
  testimonials: testemonialReducer,
});

const rootReducer = combineReducers({
  careerData: careerReducer,
  controleUI: controleUIReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;
export type IportfolioState = ReturnType<typeof careerReducer>;

export default rootReducer;
