// =================== Initial States ====================

import {
  IAbout,
  ICareerData,
  IContact,
  IPortfolio,
  IResume,
  IResumeList,
  IService,
  ITestemonial,
} from '../store/utils/dataTypes';

export const aboutInitialState: IAbout = {
  imgUrl: '',
  description: '',
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

export const servicesInitialState: IService = [];

const proExperienceInitialState: IResumeList = {
  title: 'experience',
  icon: 'icon-briefcase',
  mapLinks: 'BOTTOM',
  items: [],
};

const personalProjectInitialState: IResumeList = {
  icon: 'icon-briefcase',
  title: 'personal projects',
  mapLinks: 'BOTTOM',
  items: [],
};

const educationInitialState: IResumeList = {
  title: 'education',
  icon: 'icon-graduation',
  items: [],
};

const scientificPapersInitialState: IResumeList = {
  title: 'Scientific Papers',
  icon: 'icon-badge',
  mapLinks: 'TOP',
  selectedItem: undefined,
  items: [],
};

const organizationInitialState: IResumeList = {
  title: 'organization',
  icon: 'icon-people',
  mapLinks: 'TOP',
  items: [],
};

export const resumeInitialState: IResume = {
  education: educationInitialState,
  organizations: organizationInitialState,
  scientificPapers: scientificPapersInitialState,
  personalProject: personalProjectInitialState,
  proExperience: proExperienceInitialState,
};

export const portfolioInitialState: IPortfolio = [];

export const testimonialInitialState: ITestemonial = [];

export const careerDataInitialState: ICareerData = {
  about: aboutInitialState,
  contact: contactInitialState,
  services: servicesInitialState,
  resume: resumeInitialState,
  portfolio: portfolioInitialState,
  testimonials: testimonialInitialState,
};
