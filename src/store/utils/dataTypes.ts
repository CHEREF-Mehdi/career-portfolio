// =================== Interfaces ====================
export interface ISocialMedia {
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
  tel?: string;
  call?: string;
  malt: string;
}

export interface IServiceItem {
  name: string;
  detail: string;
  icon: string;
}

export type IService = IServiceItem[];

export interface IPortfolioItem {
  img: string;
  link?: string;
  filter: string;
}
export interface IRecommendationItem {
  src: string;
  refProfile: string;
}

export type IPortfolio = IPortfolioItem[];

export interface ITestimonialprofile {
  name: string;
  title: string;
  img: string;
  url: string;
  testimonial: string;
}

export type ITestemonial = ITestimonialprofile[];

export interface IContent {
  describtion: string;
  tools: string | null;
  links: string[];
  key?: number | string;
  abstract?: string;
}

export interface IResumeItem {
  title: string;
  year: string | null;
  key?: number | string;
  content: IContent[];
}

export interface IResumeList {
  title: string;
  icon: string;
  items: IResumeItem[];
  mapLinks?: 'TOP' | 'BOTTOM';
  selectedItem?: number;
}

export interface IResume {
  proExperience: IResumeList;
  education: IResumeList;
  personalProject: IResumeList;
  scientificPapers: IResumeList;
  organizations: IResumeList;
}

export interface ICareerData {
  about: IAbout;
  contact: IContact;
  services: IService;
  resume: IResume;
  portfolio: IPortfolio;
  testimonials: ITestemonial;
}