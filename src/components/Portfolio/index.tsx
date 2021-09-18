import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';
import { PortfolioItem } from './PortfolioItem';
import { TestimonialItem } from './TestimonialItem';

const styles: IClassNames = {
  testimonialContainer: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
  },
} as const;

export const Portfolio: React.FC = () => {
  const { items } = useSelector(
    (state: IAppState) => state.careerData.portfolio
  );
  const testimonials = useSelector(
    (state: IAppState) => state.careerData.testimonials
  );

  return (
    // <!-- Portfolio Recent Projects -->
    <section id='portfolios' className='section-padding'>
      <div className='container'>
        <h2 className='section-title wow flipInX' data-wow-delay='0.4s'>
          About my journey
        </h2>
        <div className='row'>
          <div className='col-md-12'>
            <div className='controls text-center'>
              <button
                className='filter active btn btn-common'
                data-filter='all'
              >
                All
              </button>
              <button className='filter btn btn-common' data-filter='.design'>
                Work
              </button>
              <button
                className='filter btn btn-common'
                data-filter='.development'
              >
                Travels
              </button>
              <button className='filter btn btn-common' data-filter='.print'>
                Events
              </button>
            </div>
          </div>
          <div id='portfolio' className='row'>
            {items.map(({ img, filter, link }, key) => {
              return (
                <PortfolioItem
                  key={key}
                  img={img}
                  link={link}
                  filter={filter}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* //   <!-- Recommendation Section start --> */}
      <div id='Recommendations' className='container'>
        <h2 className='section-title'>Testimonials</h2>
        {testimonials.items.length !== 0 && (
          <div className='container'>
            <div className='row' style={styles.testimonialContainer}>
              <div className='col-md-offset-2 col-md-8'>
                <div id='testimonial-slider' className='owl-carousel'>
                  {testimonials.items.map(
                    ({ img, name, testimonial, title, url }, key) => (
                      <TestimonialItem
                        key={key}
                        name={name}
                        title={title}
                        testimonial={testimonial}
                        url={url}
                        img={img}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
