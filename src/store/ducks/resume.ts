import {
  educationInitialState,
  organizationInitialState,
  personalProjectInitialState,
  proExperienceInitialState,
  scientificPapersInitialState,
} from './initialStates';

enum actions {
  SET_PRO_EXPERIENCES = 'portfolio/resume/SET_PRO_EXPERIENCES',
  SET_EDUCATION = 'portfolio/resume/SET_EDUCATION',
  SET_PERSONAL_PROJECTS = 'portfolio/resume/SET_PERSONAL_PROJECTS',
  SET_SCIENTIFIC_PAPERS = 'portfolio/resume/SET_SCIENTIFIC_PAPERS',
  SET_SELECTED_SCIENTIFIC_PAPERS = 'portfolio/resume/SET_SELECTED_SCIENTIFIC_PAPERS',
  SET_ORGANIZATIONS = 'portfolio/resume/SET_ORGANIZATIONS',
}

interface IResume {
  proExperience: NS_ReduxNS.IResumeList;
  education: NS_ReduxNS.IResumeList;
  personalProject: NS_ReduxNS.IResumeList;
  scientificPapers: NS_ReduxNS.IResumeList;
  organizations: NS_ReduxNS.IResumeList;
}

const initialState: IResume = {
  proExperience: proExperienceInitialState,
  personalProject: personalProjectInitialState,
  education: educationInitialState,
  scientificPapers: scientificPapersInitialState,
  organizations: organizationInitialState,
};

const reducer = (
  state: IResume = initialState,
  action: IResumeAction
): IResume => {
  switch (action.type) {
    case actions.SET_PRO_EXPERIENCES:
      return { ...state, proExperience: { ...action.payload } };
    case actions.SET_EDUCATION:
      return { ...state, education: { ...action.payload } };
    case actions.SET_PERSONAL_PROJECTS:
      return { ...state, personalProject: { ...action.payload } };
    case actions.SET_SCIENTIFIC_PAPERS:
      return { ...state, scientificPapers: { ...action.payload } };
    case actions.SET_ORGANIZATIONS:
      return { ...state, organizations: { ...action.payload } };
    case actions.SET_SELECTED_SCIENTIFIC_PAPERS:
      return {
        ...state,
        scientificPapers: {
          ...state.scientificPapers,
          selectedItem: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;

//action creator
const actionMaker =
  <T extends actions, G>(type: T) =>
  (payload: G) => {
    return {
      type,
      payload,
    };
  };

export const setProExperiencesAction = actionMaker<
  actions.SET_PRO_EXPERIENCES,
  NS_ReduxNS.IResumeList
>(actions.SET_PRO_EXPERIENCES);

export const setEducationAction = actionMaker<
  actions.SET_EDUCATION,
  NS_ReduxNS.IResumeList
>(actions.SET_EDUCATION);

export const setPersonalProjectsAction = actionMaker<
  actions.SET_PERSONAL_PROJECTS,
  NS_ReduxNS.IResumeList
>(actions.SET_PERSONAL_PROJECTS);

export const setScientificPapersAction = actionMaker<
  actions.SET_SCIENTIFIC_PAPERS,
  NS_ReduxNS.IResumeList
>(actions.SET_SCIENTIFIC_PAPERS);

export const setSelectedScientificPapersAction = actionMaker<
  actions.SET_SELECTED_SCIENTIFIC_PAPERS,
  number
>(actions.SET_SELECTED_SCIENTIFIC_PAPERS);

export const setOrganizationsAction = actionMaker<
  actions.SET_ORGANIZATIONS,
  NS_ReduxNS.IResumeList
>(actions.SET_ORGANIZATIONS);

const actionsObj = {
  setProExperiencesAction,
  setEducationAction,
  setPersonalProjectsAction,
  setScientificPapersAction,
  setSelectedScientificPapersAction,
  setOrganizationsAction,
};

export type IResumeAction = NS_ReduxNS.IactionUnion<typeof actionsObj>;

export const setSelectedScientificPapers = (selectedItem: number) => {
  return (Dispatch: React.Dispatch<IResumeAction>) => {
    Dispatch(setSelectedScientificPapersAction(selectedItem));
  };
};
