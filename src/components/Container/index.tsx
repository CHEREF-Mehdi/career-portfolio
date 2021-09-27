import React from 'react';
import { Header } from '../Header';
import { AboutMe } from '../AboutMe';
import { MyServices } from '../MyServices';
import { Resume } from '../Resume';
import { Portfolio } from '../Portfolio';
import { Contact } from '../Contact';
import { Footer } from '../Footer';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';
import Loader from '../Loader';
import { wow } from '../../utils';

const Container: React.FC = () => {
  const loading = useSelector((state: IAppState) => state.controleUI.loading);

  React.useEffect(() => {
    if (loading) {
      wow.init();
    } else {
      wow.sync();
    }
  }, [loading]);

  return loading ? (
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
