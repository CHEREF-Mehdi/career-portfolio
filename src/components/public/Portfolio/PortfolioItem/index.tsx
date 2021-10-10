import * as React from 'react';
import { IPortfolioItem } from '../../../../store/utils/dataTypes';
import { wow } from '../../../../utils';

interface IPortfolioItemUI extends IPortfolioItem {
  globalFilter: 'all' | 'work' | 'event' | 'travel';
}

export const PortfolioItem: React.FC<IPortfolioItemUI> = ({
  img,
  link,
  globalFilter,
}) => {
  const [openLightBox, setOpenLightBox] = React.useState(false);

  React.useEffect(() => {
    wow.sync();
  }, [globalFilter]);

  return (
    <div
      className={`col-sm-6 col-md-4 col-lg-4 col-xl-4 mix wow zoomIn`}
      key={globalFilter}
    >
      <div className='portfolio-item'>
        <div
          className='shot-item'
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + img})`,
          }}
        >          
          <div className='overlay'>
            <div className='icons'>
              <a
                onClick={() => setOpenLightBox(true)}
                className='lightbox preview'
                href='#/'
              >
                <i className='icon-eye'></i>
              </a>
              {link && (
                <a
                  className='link'
                  rel='noopener noreferrer'
                  href={link}
                  target='_blank'
                >
                  <i className='icon-link'></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`nivo-lightbox-overlay nivo-lightbox-theme-default nivo-lightbox-effect-fadeScale ${
          openLightBox && ' nivo-lightbox-open'
        }`}
      >
        <div className='nivo-lightbox-wrap'>
          <div className='nivo-lightbox-content'>
            <div
              className='nivo-lightbox-image'
              style={{ lineHeight: '578px', height: '578px' }}
            >
              <img
                src={process.env.PUBLIC_URL + img}
                className='nivo-lightbox-image-display'
                alt=''
              />
            </div>
          </div>
          <div className='nivo-lightbox-title-wrap'>
            <a
              className='nivo-lightbox-close'
              title='Close'
              onClick={() => setOpenLightBox(false)}
              href='#/'
            >
              <i className='icon-close'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
