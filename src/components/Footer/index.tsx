import * as React from 'react';

export const Footer: React.FC = () => {
  return (
    <>
      {/* <!-- Footer Section Start --> */}
      <footer className='footer-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='footer-text text-center wow fadeInDown'
                data-wow-delay='0.3s'
              >
                <ul className='social-icon socialMediaDiv'></ul>
                <p id='Copyright'>
                  {'Copyright © ' +
                    new Date().getFullYear() +
                    ' UIdeck All Right Reserved'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}

      {/* <!-- Go to Top Link --> */}
      <a href='#hero-area' className='back-to-top'>
        <i className='icon-arrow-up'></i>
      </a>
    </>
  );
};
