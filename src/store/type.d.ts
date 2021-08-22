namespace NS_ReduxNS {
  interface IstringMap<T> {
    [key: string]: T;
  }
  type IanyFct = (...args: any[]) => any;
  type IactionUnion<A extends IstringMap<IanyFct>> = ReturnType<A[keyof A]>;

  interface IContent {
    describtion: string;
    tools: string | null;
    links: string[];
    id?: number | string;
    abstract?: string;
  }

  interface IResumeItem {
    title: string;
    year: string | null;
    id?: number | string;
    content: NS_ReduxNS.IContent[];
  }

  interface IResumeList {
    title: string;
    icon: string;
    items: NS_ReduxNS.IResumeItem[];
    mapLinks?: 'TOP' | 'BOTTOM';
    selectedItem?: number;
  }
}

namespace NS_UI {
  interface IModalContent {
    title?: string;
    year?: string;
    abstract?: string;
    link?: string;
  }
}
