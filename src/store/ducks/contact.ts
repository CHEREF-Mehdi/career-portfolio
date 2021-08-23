import { contactInitialState, IContact } from './initialStates';

enum actions {
  SET_CONTACT = 'portfolio/about/SET_CONTACT',
}

const reducer = (
  state: IContact = contactInitialState,
  action: IContactaction
): IContact => {
  switch (action.type) {
    case actions.SET_CONTACT:
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

export const setContactAction = actionMaker<actions.SET_CONTACT, IContact>(
  actions.SET_CONTACT
);

const actionsObj = {
  setContactAction,
};

export type IContactaction = NS_ReduxNS.IactionUnion<typeof actionsObj>;
