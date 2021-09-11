enum actions {
  SET_LOANDING = 'portfolio/about/SET_LOANDING',
}

interface IControlUI {
  loading: boolean;
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

export const setControlUItAction = actionMaker<actions.SET_LOANDING, boolean>(
  actions.SET_LOANDING
);

const actionsObj = {
  setControlUItAction,
};

export type IControlUIAction = NS_ReduxNS.IactionUnion<typeof actionsObj>;
