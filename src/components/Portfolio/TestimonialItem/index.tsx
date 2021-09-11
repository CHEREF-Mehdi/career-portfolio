import * as React from 'react';
import { ITestimonialprofile } from '../../../store/ducks/initialStates';

export const TestimonialItem: React.FC<ITestimonialprofile> = ({
  img,
  name,
  testimonial,
  title,
  url,
}) => {
  return (
    <div className='testimonial'>
      <div className='testimonial-content'>
        <p className='description'>{testimonial}</p>
      </div>
      <div className='testimonial-profile' >
        <div className='pic'>
          <img
            src={process.env.PUBLIC_URL + img}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            alt=''
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            minHeight: '110px',
          }}
        >
          <h3 className='title'>
            <div
              style={{
                display: 'flex',
                minHeight: '100%',
                justifyContent: 'center',
                justifyItems: 'center',
                flexDirection: 'column',
              }}
            >
              <a href={url} target='_blank' rel='noopener noreferrer'>
                {name}
              </a>
              <span className='post'>{title}</span>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};
