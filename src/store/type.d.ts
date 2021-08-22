namespace NS_ReduxNS {
  interface IstringMap<T> {
    [key: string]: T;
  }
  type IanyFct = (...args: any[]) => any;
  export type IactionUnion<A extends IstringMap<IanyFct>> = ReturnType<
    A[keyof A]
  >;
}
