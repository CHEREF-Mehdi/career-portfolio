import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';
import { SocialMedia } from '../SocialMedia';

export const Footer: React.FC = () => {
  const socialMedia = useSelector(
    (state: IAppState) => state.careerData.about.socialMedia
  );
  return (
    <>
      <footer className='footer-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='footer-text text-center wow fadeInDown'
                data-wow-delay='0.3s'
              >
                <SocialMedia items={socialMedia} />
                <p id='Copyright'>
                  {'Copyright © ' +
                    new Date().getFullYear() +
                    ' Mehdi CHEREF All Right Reserved'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Go to Top Link --> */}
      <a href='#hero-area' className='back-to-top'>
        <i className='icon-arrow-up'></i>
      </a>
    </>
  );
};
