declare namespace NS_ReduxNS {

  interface IstringMap<T> {
    [key: string]: T;
  }

  type IanyFct = (...args: any[]) => any;

  type IactionUnion<A extends IstringMap<IanyFct>> = ReturnType<A[keyof A]>;
}

declare namespace NS_UI {
  interface IModalContent {
    title?: string;
    year?: string;
    abstract?: string;
    link?: string;
  }
}
