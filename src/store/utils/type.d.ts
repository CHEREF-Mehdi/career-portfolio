declare namespace NS_ReduxNS {
  export type actionMaker = <Y, T extends Y, G>(
    type: T
  ) => (payload: G) => {
    type: T;
    payload: G;
  };

  interface IstringMap<T> {
    [key: string]: T;
  }

  type IanyFct = (...args: any[]) => any;

  type IactionUnion<A extends IstringMap<IanyFct>> = ReturnType<A[keyof A]>;
}



