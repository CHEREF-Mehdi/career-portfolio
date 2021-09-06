import { testimonialInitialState, ITestemonial } from './initialStates';

enum actions {
    SET_TESTIMONIALS = 'portfolio/testimonial/SET_TESTIMONIALS',
}

//reducer
const reducer = (
  state: ITestemonial = testimonialInitialState,
  action: ITestimonialAction
): ITestemonial => {
  switch (action.type) {
    case actions.SET_TESTIMONIALS:
      return { ...action.payload };
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

export const setTestimonialAction = actionMaker<actions.SET_TESTIMONIALS, ITestemonial>(
  actions.SET_TESTIMONIALS
);

const actionsObj = {
    setTestimonialAction,
};

export type ITestimonialAction = NS_ReduxNS.IactionUnion<typeof actionsObj>;