enum actions {
  SET_LOANDING = 'portfolio/UI/SET_LOANDING',
  SET_ERROR = 'portfolio/UI/SET_ERROR',
}

interface IControlUI {
  loading: boolean;
  error?: string;
}

const controlUIInitialState: IControlUI = {
  loading: true,
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

export const setUILoadingAction = actionMaker<actions.SET_LOANDING, boolean>(
  actions.SET_LOANDING
);

export const setUIErrorAction = actionMaker<
  actions.SET_ERROR,
  string | undefined
>(actions.SET_ERROR);

export const controleUIActionsObj = {
  setUILoadingAction,
  setUIErrorAction,
};

export type IControlUIAction = NS_ReduxNS.IactionUnion<
  typeof controleUIActionsObj
>;
