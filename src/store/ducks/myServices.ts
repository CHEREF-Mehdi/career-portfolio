import { IService, servicesInitialState } from './initialStates';

enum actions {
  SET_SERVICES = 'portfolio/services/SET_SERVICES',
}

const reducer = (
  state: IService = servicesInitialState,
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

export const setServiceAction = actionMaker<actions.SET_SERVICES, IService>(
  actions.SET_SERVICES
);

const actionsObj = {
  setServiceAction,
};

export type IServiceAction = NS_ReduxNS.IactionUnion<typeof actionsObj>;
