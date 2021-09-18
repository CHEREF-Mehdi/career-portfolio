import React from 'react';
import { Header } from '../Header';
import { AboutMe } from '../AboutMe';
import { MyServices } from '../MyServices';
import { Resume } from '../Resume';
import { Portfolio } from '../Portfolio';
import { Contact } from '../Contact';
import { Footer } from '../Footer';
import { Modal } from '../Modal';
import { getAllData, IAppStateAPIAction } from '../../utils/dispatchData';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';

import { css } from '@emotion/react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { getRandomInt } from '../../utils';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  top: 40vh;
  left: -25px;
`;

const loadingTexts: string[] = [
  "We're building the buildings as fast as we can.",
  "Don't worry - a few bits tried to escape, but we caught them.",
  'The server is powered by a lemon and two electrodes.',
  'Waiting Daenerys say all her titles...',
];

const Container: React.FC = () => {
  const dispatch: React.Dispatch<IAppStateAPIAction> = useDispatch();
  const loading = useSelector((state: IAppState) => state.controleUI.loading);

  React.useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <div className='loader'>
          <PacmanLoader color='#00b4d9' css={override} size={50} />
          <div className='loader-message-box'>
            <h5>{loadingTexts[getRandomInt(loadingTexts.length)]}</h5>
          </div>
        </div>
      )}
      <Header />
      <AboutMe />
      <MyServices />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <Modal />
    </>
  );
};

export default Container;
