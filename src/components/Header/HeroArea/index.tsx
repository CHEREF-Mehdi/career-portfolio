import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../store/ducks/rootReducer';
import { GAEventCategories, getRandomInt } from '../../../utils';
import ReactGa from 'react-ga';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { SocialMedia } from '../../SocialMedia';

const styles: IClassNames = {
  heroAreaContent: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
} as const;

export const HeroArea: React.FC = () => {
  const about = useSelector((state: IAppState) => state.careerData.about);

  const [quoteIndex, setQuoteIndex] = React.useState(0);

  const onGetQuoteClick = () => {
    ReactGa.event({
      category: GAEventCategories.BUTTON_CLICK,
      action: 'Get Quotes',
    });

    let r = getRandomInt(about.quotes.length);
    while (r === quoteIndex) {
      r = getRandomInt(about.quotes.length);
    }
    setQuoteIndex(r);
  };

  const renderTooltip = (props: any) => (
    <Popover id='popover-basic' {...props}>
      <Popover.Content>{about.quotes[quoteIndex]}</Popover.Content>
    </Popover>
  );

  return (
    <div id='hero-area' className='hero-area-bg'>
      <div className='overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-sm-12 text-center'>
            <div className='contents' style={styles.heroAreaContent}>
              <h5 className='script-font wow fadeInUp' data-wow-delay='0.2s'>
                Hi This is
              </h5>
              <h2 className='head-title wow fadeInUp' data-wow-delay='0.4s'>
                Mehdi CHEREF
              </h2>
              <p
                id='jobTitle'
                className='script-font wow fadeInUp'
                data-wow-delay='0.6s'
              >
                {about.jobTitle}
              </p>

              <SocialMedia items={about.socialMedia} />

              <div className='header-button wow fadeInUp' data-wow-delay='1s'>
                <OverlayTrigger placement='bottom' overlay={renderTooltip}>
                  <button className='btn btn-common' onClick={onGetQuoteClick}>
                    Favorite Quotes
                  </button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
