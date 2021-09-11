import { IAboutAction, setAboutAction } from '../../store/ducks/about';
import { IContactaction, setContactAction } from '../../store/ducks/contact';
import { IServiceAction, setServiceAction } from '../../store/ducks/myServices';
import {
  IResumeAction,
  setProExperiencesAction,
  setEducationAction,
  setPersonalProjectsAction,
  setScientificPapersAction,
  setSelectedScientificPapersAction,
  setOrganizationsAction,
} from '../../store/ducks/resume';
import { IPortfolioAction, setPortfolioAction } from '../../store/ducks/portfolio';
import { ITestimonialAction, setTestimonialAction } from '../../store/ducks/testimonial';
import { IControlUIAction, setControlUItAction } from '../../store/ducks/controlUI';

import * as API_CALLS from '../apiCalls';
import { toastNotify } from '..';
import { IportfolioState } from '../../store/ducks/rootReducer';
import { oldDataGlobalState } from '../oldData';

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
  setControlUItAction
};

type IAppAction = NS_ReduxNS.IactionUnion<typeof appActionObj>;

export type IAppStateAPIAction = (Dispatch: React.Dispatch<IAppAction>) => any;

type IDispatch =
  | IAboutAction
  | IContactaction
  | IServiceAction
  | IResumeAction
  | IPortfolioAction
  | ITestimonialAction
  | IControlUIAction;

const updateState = (Dispatch: React.Dispatch<IDispatch>, data: IportfolioState) => {
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
  setTimeout(()=>{
    Dispatch(setControlUItAction(false));
    document.body.classList.remove('no-scroll-bare');
  },1500)
  
};

export const getAllData = () => {
  document.body.classList.add('no-scroll-bare');
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
