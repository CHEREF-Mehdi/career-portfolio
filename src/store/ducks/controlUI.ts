import { reduxActionMaker } from '../utils/actionMaker';

enum actions {
  SET_LOANDING = 'portfolio/UI/SET_LOANDING',
  SET_ERROR = 'portfolio/UI/SET_ERROR',
  SET_PORTFOLIODATARETREIVED = 'portfolio/UI/SET_PORTFOLIODATARETREIVED',
}

interface IControlUI {
  loading: boolean;
  error?: string;
  portfolioDataRetrieved: boolean;
}

const controlUIInitialState: IControlUI = {
  loading: true,
  portfolioDataRetrieved: false,
};

//reducer
const reducer = (
  state: IControlUI = controlUIInitialState,
  action: IControlUIAction
): IControlUI => {
  switch (action.type) {
    case actions.SET_LOANDING:
      return { ...state, loading: action.payload };
    case actions.SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case actions.SET_PORTFOLIODATARETREIVED:
      return { ...state, portfolioDataRetrieved: action.payload };
    default:
      return state;
  }
};

export default reducer;

export const setUILoadingAction = reduxActionMaker<
  actions,
  actions.SET_LOANDING,
  boolean
>(actions.SET_LOANDING);

export const setUIErrorAction = reduxActionMaker<
  actions,
  actions.SET_ERROR,
  string | undefined
>(actions.SET_ERROR);

export const setUIPortfolioDataRetreived = reduxActionMaker<
  actions,
  actions.SET_PORTFOLIODATARETREIVED,
  boolean
>(actions.SET_PORTFOLIODATARETREIVED);

export const controleUIActionsObj = {
  setUILoadingAction,
  setUIErrorAction,
  setUIPortfolioDataRetreived,
};

export type IControlUIAction = NS_ReduxNS.IactionUnion<
  typeof controleUIActionsObj
>;
