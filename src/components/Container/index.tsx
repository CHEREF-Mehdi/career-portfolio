import React from 'react';
import { Header } from '../Header';
import { AboutMe } from '../AboutMe';
import { MyServices } from '../MyServices';
import { Resume } from '../Resume';
import { Portfolio } from '../Portfolio';
import { Contact } from '../Contact';
import { Footer } from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';
import Loader from '../Loader';
import { wow } from '../../utils';
import {
  getCareerData,
  IDispatchCareerAction,
} from '../../store/ducks/careerReducer';

const Container: React.FC = () => {
  const dispatch: React.Dispatch<IDispatchCareerAction> = useDispatch();

  const controleUI = useSelector((state: IAppState) => state.controleUI);

  React.useEffect(() => { 
    if (!controleUI.portfolioDataRetrieved) {
      dispatch(getCareerData());
    }
  }, [dispatch, controleUI.portfolioDataRetrieved]);

  React.useEffect(() => {
    wow.sync();
  }, [controleUI.loading]);

  return controleUI.loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <AboutMe />
      <MyServices />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Container;
