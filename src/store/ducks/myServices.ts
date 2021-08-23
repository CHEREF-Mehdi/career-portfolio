import { IService, ServicesInitialState } from './initialStates';

enum actions {
  SET_SERVICES = 'portfolio/about/SET_SERVICES',
}

const reducer = (
  state: IService = ServicesInitialState,
  action: IServiceAction
): IService => {
  switch (action.type) {
    case actions.SET_SERVICES:
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

export const setContactAction = actionMaker<actions.SET_SERVICES, IService>(
  actions.SET_SERVICES
);

const actionsObj = {
  setContactAction,
};

export type IServiceAction = NS_ReduxNS.IactionUnion<typeof actionsObj>;
