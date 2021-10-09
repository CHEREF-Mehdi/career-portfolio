import * as React from 'react';
import { ITestimonialprofile } from '../../../store/utils/dataTypes';

const styles: IClassNames = {
  img: { maxWidth: '100%', maxHeight: '100%' },
  titleContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    minHeight: '110px',
  },
  titleBody: {
    display: 'flex',
    minHeight: '100%',
    justifyContent: 'center',
    justifyItems: 'center',
    flexDirection: 'column',
  },
} as const;

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
        <div className='testimonial-profile'>
          <div className='pic'>
            <img src={process.env.PUBLIC_URL + img} style={styles.img} alt='' />
          </div>
          <div style={styles.titleContainer}>
            <h3 className='title'>
              <div style={styles.titleBody}>
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
