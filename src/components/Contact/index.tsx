import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';

const styles: IClassNames = {
  contactContainer: { display: 'flex', padding: 0 },
  contactHeader: { paddingLeft: '20px' },
  canvasContainer: { flex: 1, height: '250px' },
} as const;

export const Contact: React.FC = () => {
  const contact = useSelector((state: IAppState) => state.careerData.contact);
  return (
    <section id='contact' className='section-padding'>
      <div className='contact-form'>
        <div className='container'>
          <div
            className='row contact-form-area wow fadeInUp'
            data-wow-delay='0.4s'
          >
            <div
              id='contactDiv'
              className='col-md-6 col-lg-6 col-sm-12'
              style={styles.contactContainer}
            >
              <div className='col-md-12 col-lg-12 col-sm-12 footer-right-area wow fadeIn'>
                <h2 style={styles.contactHeader}>Contact Address</h2>
                <div className='footer-right-contact'>
                  <div className='single-contact'>
                    <div className='contact-icon'>
                      <i className='fa fa-map-marker'></i>
                    </div>
                    <p>{contact.adress}</p>
                  </div>
                  <div className='single-contact'>
                    <div className='contact-icon'>
                      <i className='fa fa-envelope'></i>
                    </div>

                    <span className='pro-detail'>
                      <a href={`mailto:${contact.email1}`}>{contact.email1}</a>
                    </span>
                    <br />
                    <span className='pro-detail'>
                      <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
                    </span>
                  </div>
                  <div className='single-contact'>
                    <div className='contact-icon'>
                      <i className='fa fa-phone'></i>
                    </div>
                    <a href={contact.call}>{contact.tel}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-sm-12'>
              <div style={styles.canvasContainer} id='canvasParent'>
                <iframe
                  title='Cube Game'
                  src={process.env.PUBLIC_URL + '/assets/cubeGame/index.html'}
                  seamless
                  height='100%'
                  width='100%'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
