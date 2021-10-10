import React from 'react';
import { css } from '@emotion/react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { getRandomInt } from '../../../utils';

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

const Loader: React.FC = () => {
  return (
    <div className='loader'>
      <PacmanLoader color='#00b4d9' css={override} size={50} />
      <div className='loader-message-box'>
        <h5>{loadingTexts[getRandomInt(loadingTexts.length)]}</h5>
      </div>
    </div>
  );
};

export default Loader;
