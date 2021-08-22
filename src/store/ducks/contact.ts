enum actions {
  SET_CONTACT = 'portfolio/about/SET_CONTACT',
}

export interface IContact {
  adress: string;
  email1: string;
  email2: string;
  tel: string;
  call: string;
  malt: string;
}

const initialState: IContact = {
  adress: 'Toulouse, France.',
  email1: 'cheref-mehdi@hotmail.fr',
  email2: 'mehdi.cheref@capgemini.com',
  tel: '+(33) 7 83 92 08 01',
  call: 'tel:0033783920801',
  malt: 'https://www.malt.fr/profile/mehdicheref',
};

const reducer = (state: IContact = initialState, action: Iaction): IContact => {
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

export type Iaction = NS_ReduxNS.IactionUnion<typeof actionsObj>;
