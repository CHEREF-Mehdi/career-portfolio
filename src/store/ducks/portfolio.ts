import { portfolioInitialState, IPortfolio} from './initialStates';

enum actions {
  SET_PORTFOLIO = 'portfolio/about/SET_PORTFOLIO',
}

const reducer = (
  state: IPortfolio = portfolioInitialState,
  action: IPortfolioAction
): IPortfolio => {
  switch (action.type) {
    case actions.SET_PORTFOLIO:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;

//action creator
const actionMaker =
  <T extends actions, G>(type: T) =>
  (payload: G) => {
    return {
      type,
      payload,
    };
  };

export const setPortfolioAction = actionMaker<actions.SET_PORTFOLIO, IPortfolio>(
  actions.SET_PORTFOLIO
);

const actionsObj = {
    setPortfolioAction,
};

export type IPortfolioAction = NS_ReduxNS.IactionUnion<typeof actionsObj>;
