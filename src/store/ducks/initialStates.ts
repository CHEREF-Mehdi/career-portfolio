// =================== Interfaces ====================
interface ISocialMedia {
  cssClass: string;
  link: string;
  icon: string;
}

export interface IAbout {
  imgUrl: string;
  description: string;
  name: string;
  age: string;
  songs: { artist: string; url: string }[];
  book: string;
  location: string;
  jobTitle: string;
  quotes: string[];
  socialMedia: ISocialMedia[];
}

export interface IContact {
  adress: string;
  email1: string;
  email2: string;
  tel: string;
  call: string;
  malt: string;
}

export interface IServiceItem {
  name: string;
  detail: string;
  icon: string;
}

export interface IService {
  items: IServiceItem[];
}

export interface IPortfolioItem {
  img: string;
  link?: string;
  filter: string;
}
export interface IRecommendationItem {
  src: string;
  refProfile: string;
}

export interface IPortfolio {
  items: IPortfolioItem[];
}

export interface ITestimonialprofile {
  name: string;
  title: string;
  img: string;
  url: string;
  testimonial: string;
}

export interface ITestemonial {
  items: ITestimonialprofile[];
}

// =================== Initial States ====================

export const aboutInitialState: IAbout = {
  imgUrl: '',
  description: "",
  name: '',
  age: '',
  book: '',
  songs: [],
  location: '',
  jobTitle: '',
  quotes: [],
  socialMedia: [],
};

export const contactInitialState: IContact = {
  adress: '',
  email1: '',
  email2: '',
  tel: '',
  call: '',
  malt: '',
};

export const servicesInitialState: IService = {
  items: [],
};

export const proExperienceInitialState: NS_ReduxNS.IResumeList = {
  title: 'experience',
  icon: 'icon-briefcase',
  mapLinks: 'BOTTOM',
  items: [],
};

export const personalProjectInitialState: NS_ReduxNS.IResumeList = {
  icon: 'icon-briefcase',
  title: 'personal projects',
  mapLinks: 'BOTTOM',
  items: [],
};

export const educationInitialState: NS_ReduxNS.IResumeList = {
  title: 'education',
  icon: 'icon-graduation',
  items: [],
};

export const scientificPapersInitialState: NS_ReduxNS.IResumeList = {
  title: 'Scientific Papers',
  icon: 'icon-badge',
  mapLinks: 'TOP',
  selectedItem: undefined,
  items: [],
};

export const organizationInitialState: NS_ReduxNS.IResumeList = {
  title: 'organization',
  icon: 'icon-people',
  mapLinks: 'TOP',
  items: [],
};

export const portfolioInitialState: IPortfolio = {
  items: [],
};

export const testimonialInitialState: ITestemonial = {
  items: [],
};
