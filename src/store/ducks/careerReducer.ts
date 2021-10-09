import store from '..';
import {
  toastNotify,
  API_CALLS,
  careerDataInitialState,
  oldCareerData,
} from '../../utils';
import { reduxActionMaker } from '../utils/actionMaker';
import { ICareerData } from '../utils/dataTypes';
import {
  setUIErrorAction,
  setUILoadingAction,
  setUIPortfolioDataRetreived,
} from './controlUI';

enum actions {
  SET_CAREER_DATA = 'portfolio/DATA/SET_PORTFOLIO_DATA',
  SET_SELECTED_SCIENTIFIC_PAPERS = 'portfolio/DATA/SET_SELECTED_SCIENTIFIC_PAPERS',
}

const initialState: ICareerData = careerDataInitialState;

export const careerReducer = (
  state: ICareerData = initialState,
  action: ICareerAction
): ICareerData => {
  switch (action.type) {
    case actions.SET_CAREER_DATA:
      return { ...action.payload };
    case actions.SET_SELECTED_SCIENTIFIC_PAPERS:
      return {
        ...state,
        resume: {
          ...state.resume,
          scientificPapers: {
            ...state.resume.scientificPapers,
            selectedItem: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

const setPortfolioAction = reduxActionMaker<
  actions,
  actions.SET_CAREER_DATA,
  ICareerData
>(actions.SET_CAREER_DATA);

export const setSelectedScientificPapersAction = reduxActionMaker<
  actions,
  actions.SET_SELECTED_SCIENTIFIC_PAPERS,
  number
>(actions.SET_SELECTED_SCIENTIFIC_PAPERS);

const appActionObj = {
  setPortfolioAction,
  setSelectedScientificPapersAction,
};

type ICareerAction = NS_ReduxNS.IactionUnion<typeof appActionObj>;

export type IDispatchCareerAction = (
  Dispatch: React.Dispatch<ICareerAction>
) => any;

export const getCareerData = () => {
  
  store.dispatch(setUILoadingAction(true));
  return (Dispatch: React.Dispatch<ICareerAction>) => {
    API_CALLS.getPortfolioData()
      .then((result) => {        
        if (result.status === 200) {
          Dispatch(setPortfolioAction(result.data));
          store.dispatch(setUIPortfolioDataRetreived(true));
        }
      })
      .catch((error) => {
        Dispatch(setPortfolioAction(oldCareerData));       
        store.dispatch(setUIPortfolioDataRetreived(false));
        store.dispatch(setUIErrorAction(error.message));
        toastNotify('Server down! Data may not be up-to-date!.');
      })
      .finally(() => store.dispatch(setUILoadingAction(false)));
  };
};
