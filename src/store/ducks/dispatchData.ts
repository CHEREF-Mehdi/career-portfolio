import { IAboutAction, setAboutAction } from './about';
import { IContactaction, setContactAction } from './contact';
import { IServiceAction, setServiceAction } from './myServices';
import {
  IResumeAction,
  setProExperiencesAction,
  setEducationAction,
  setPersonalProjectsAction,
  setScientificPapersAction,
  setSelectedScientificPapersAction,
  setOrganizationsAction,
} from './resume';
import { IPortfolioAction, setPortfolioAction } from './portfolio';
import { ITestimonialAction, setTestimonialAction } from './testimonial';
import * as API_CALLS from '../../utils/apiCalls';
import { toastNotify } from '../../utils';
import { IAppState } from './rootReducer';
import { oldDataGlobalState } from '../../utils/oldData';

const appActionObj = {
  setAboutAction,
  setContactAction,
  setServiceAction,
  setProExperiencesAction,
  setEducationAction,
  setPersonalProjectsAction,
  setScientificPapersAction,
  setSelectedScientificPapersAction,
  setOrganizationsAction,
  setPortfolioAction,
  setTestimonialAction,
};

type IAppAction = NS_ReduxNS.IactionUnion<typeof appActionObj>;

export type IAppStateAPIAction = (Dispatch: React.Dispatch<IAppAction>) => any;

type IDispatch =
  | IAboutAction
  | IContactaction
  | IServiceAction
  | IResumeAction
  | IPortfolioAction
  | ITestimonialAction;

const updateState = (Dispatch: React.Dispatch<IDispatch>, data: IAppState) => {
  const { about, contact, portfolio, resume, services, testimonials } = data;
  Dispatch(setAboutAction(about));
  Dispatch(setContactAction(contact));
  Dispatch(setServiceAction(services));
  Dispatch(setProExperiencesAction(resume.proExperience));
  Dispatch(setEducationAction(resume.education));
  Dispatch(setPersonalProjectsAction(resume.personalProject));
  Dispatch(setScientificPapersAction(resume.scientificPapers));
  Dispatch(setOrganizationsAction(resume.organizations));
  Dispatch(setPortfolioAction(portfolio));
  Dispatch(setTestimonialAction(testimonials));
};

export const getAllData = () => {
  return (Dispatch: React.Dispatch<IDispatch>) => {
    API_CALLS.getPortfolioData
      .then((result) => {
        if (result.status === 200) {
          updateState(Dispatch, result.data);
        }
      })
      .catch((error) => {
        console.error(error);
        toastNotify('Data may not be up-to-date!.');
        updateState(Dispatch, oldDataGlobalState);
      });
  };
};
