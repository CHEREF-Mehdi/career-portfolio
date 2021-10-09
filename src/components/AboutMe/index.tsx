import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';

const styles: IClassNames = {
  imgcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bio: {
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
} as const;

export const AboutMe: React.FC = () => {
  const about = useSelector((state: IAppState) => state.careerData.about);
  const contact = useSelector((state: IAppState) => state.careerData.contact);
  return (
    <section id='about' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-6 col-md-6 col-sm-12 col-xs-12'
            style={styles.imgcontainer}
          >
            <div className='img-thumb wow fadeInLeft' data-wow-delay='0.3s'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + about.imgUrl}
                alt='CHEREF Mehdi'
              />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div
              className='profile-wrapper wow fadeInRight'
              data-wow-delay='0.3s'
            >
              <h3>Hi Guys!</h3>
              <p
                style={styles.bio}
                dangerouslySetInnerHTML={{ __html: about.description }}
              ></p>
              <div className='about-profile'>
                <ul className='admin-profile'>
                  <li>
                    <span className='pro-title'> Age </span>
                    <span className='pro-detail'>{about.age}</span>
                  </li>

                  <li>
                    <span className='pro-title'>I'm reading </span>
                    <span className='pro-detail'>{about.book}</span>
                  </li>

                  <li>
                    <span className='pro-title'> Music </span>
                    <span className='pro-detail'>
                      {about.songs.map((item, key) => (
                        <span key={key}>
                          <a
                            href={item.url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {item.artist}
                          </a>
                          {key !== about.songs.length - 1 && ' , '}
                        </span>
                      ))}
                    </span>
                  </li>

                  <li>
                    <span className='pro-title'> Location </span>
                    <span className='pro-detail'>{about.location}</span>
                  </li>

                  <li>
                    <span className='pro-title'> e-mail</span>
                    <span className='pro-detail'>
                      <a href={`mailto:${contact.email1}`}>{contact.email1}</a>
                    </span>
                  </li>

                  <li>
                    <span className='pro-title'> Pro e-mail </span>
                    <span className='pro-detail'>
                      <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
                    </span>
                  </li>

                  {/* <li>
                    <span className='pro-title'> Phone </span>
                    <span className='pro-detail'>
                      <a href={contact.call}>{contact.tel}</a>
                    </span>
                  </li> */}

                  <li>
                    <span className='pro-title'> Freelance </span>
                    <span className='pro-detail'>
                      <a
                        href={contact.malt}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {contact.malt.substring(12)}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
