import * as React from 'react';
import { IPortfolioItem } from '../../../store/ducks/initialStates';

export const PortfolioItem: React.FC<IPortfolioItem> = ({
  filter,
  img,
  link,
}) => {
  return (
      <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-4 mix ${filter}`} data-wow-delay='0.4s'>
        <div className='portfolio-item'>
          <div className='shot-item'>
            <img src={process.env.PUBLIC_URL + img} alt='CHEREF Mehdi' />
            <div className='overlay'>
              <div className='icons'>
                <a
                  className='lightbox preview'
                  href={process.env.PUBLIC_URL + img}
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
      </div>
  );
};
