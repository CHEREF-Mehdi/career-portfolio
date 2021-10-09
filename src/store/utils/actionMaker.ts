//action creator
export const reduxActionMaker: NS_ReduxNS.actionMaker =
  <Y, T extends Y, G>(type: T) =>
  (payload: G) => {
    return {
      type,
      payload,
    };
  };
