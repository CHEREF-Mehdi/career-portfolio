import * as React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id='contact' className='section-padding'>
      <div className='contact-form'>
        <div className='container'>
          <div
            className='row contact-form-area wow fadeInUp'
            data-wow-delay='0.4s'
          >
            <div className='col-md-6 col-lg-6 col-sm-12'>
              <div style={{ flex: 1, height: '250px' }} id='canvasParent'>
                
              </div>
            </div>
            <div
              className='col-md-6 col-lg-6 col-sm-12'
              style={{ display: 'flex' }}
            >
              <div
                id='contactDiv'
                className='col-md-12 col-lg-12 col-sm-12'
                style={{ display: 'flex' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
