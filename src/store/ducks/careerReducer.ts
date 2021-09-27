import { toastNotify, API, careerDataInitialState, oldCareerData } from '../../utils';
import { ICareerData } from '../dataTypes';

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

//action creator
const actionMaker =
  <T extends actions, G>(type: T) =>
  (payload: G) => {
    return {
      type,
      payload,
    };
  };

export const setPortfolioAction = actionMaker<
  actions.SET_CAREER_DATA,
  ICareerData
>(actions.SET_CAREER_DATA);

export const setSelectedScientificPapersAction = actionMaker<
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

export const getCareerData = (onSuccess: () => void) => {
  return (Dispatch: React.Dispatch<ICareerAction>) => {
    API.getPortfolioData
      .then((result) => {
        if (result.status === 200) {
          Dispatch(setPortfolioAction(result.data));
        }
      })
      .catch((error) => {
        Dispatch(setPortfolioAction(oldCareerData));
        if (error.message === 'Network Error') {
          console.error(error);
          toastNotify('Network Error! Please check your internet connection', 'error');
        }

        toastNotify('Server down! Data may not be up-to-date!.');
      })
      .finally(() => onSuccess());
  };
};
