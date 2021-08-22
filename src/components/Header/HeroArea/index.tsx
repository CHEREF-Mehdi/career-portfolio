import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../store/ducks/rootReducer';
import { getRandomInt } from '../../../utils';

export const HeroArea: React.FC = () => {
  const getAbout = useSelector((state: IAppState) => state.about);
  const [quote, setQuote] = React.useState<{ i: number; change: boolean }>({
    i: 0,
    change: true,
  });

  const onGetQuoteClick = () => {
    let r = getRandomInt(getAbout.quotes.length);
    while (r === quote.i) {
      r = getRandomInt(getAbout.quotes.length);
    }
    quote.change
      ? setQuote({ i: r, change: !quote.change })
      : setQuote({ i: quote.i, change: !quote.change });
  };

  return (
    <div id='hero-area' className='hero-area-bg'>
      <div className='overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-sm-12 text-center'>
            <div className='contents'>
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
                {getAbout.jobTitle}
              </p>
              <ul
                className='social-icon wow fadeInUp socialMediaDiv'
                data-wow-delay='0.8s'
              >
                {getAbout.socialMedia.map((item, key) => (
                  <li key={key}>
                    <a
                      className={item.cssClass}
                      target='_blank'
                      rel='noopener noreferrer'
                      href={item.link}
                    >
                      <i className={item.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
              <div className='header-button wow fadeInUp' data-wow-delay='1s'>
                <button
                  className='btn btn-common'
                  data-placement='bottom'
                  data-toggle='popover'
                  tabIndex={0}
                  data-trigger="focus"
                  data-content={getAbout.quotes[quote.i]}
                  onClick={onGetQuoteClick}
                >
                  Favorite Quotes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
