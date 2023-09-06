import React from 'react';
import { css } from '@emotion/react';
import { PuffLoader } from 'react-spinners';
import { getRandomInt } from '../../../utils';

const styles: IClassNames = {
  loadercontainer: {
    display: 'flex',
    justifyContent: 'center',
  }
} as const;

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
  'Waiting Daenerys TARGARYEN say all her titles...',
];


const Loader: React.FC = () => {

  const [loaderTextIndex, setLoadingTextIndex] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
        setLoadingTextIndex(getRandomInt(loadingTexts.length));
    }, 2000);
    return () => clearTimeout(timeout);
  }, [loaderTextIndex]);

  return (
    <div className='loader' style={styles.loadercontainer}>
      <PuffLoader color='#00b4d9' css={override} size={100} />
      <div className='loader-message-box'>
        <h5>{loadingTexts[loaderTextIndex]}</h5>
      </div>
    </div>
  );
};

export default Loader;
