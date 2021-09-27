import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
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
  portfolioContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
  },
} as const;

export const Portfolio: React.FC = () => {
  const portfolio = useSelector(
    (state: IAppState) => state.careerData.portfolio
  );
  const testimonials = useSelector(
    (state: IAppState) => state.careerData.testimonials
  );
  const [globalFilter, setGlobalFilter] = React.useState<
    'all' | 'work' | 'event' | 'travel'
  >('all');

  const [filteredImage, setFilteredImage] = React.useState(portfolio);

  React.useEffect(() => {
    if (globalFilter === 'all') {
      setFilteredImage(portfolio);
    } else {
      setFilteredImage(
        portfolio.filter((item) => item.filter === globalFilter)
      );
    }
  }, [globalFilter, portfolio]);

  return (
    <section id='portfolios' className='section-padding'>
      <div className='container'>
        <h2 className='section-title wow flipInX' data-wow-delay='0.4s'>
          About my journey
        </h2>
        <div className='row'>
          <div className='col-md-12'>
            <div className='controls text-center'>
              <button
                className={`filter btn btn-common ${
                  globalFilter === 'all' && 'active'
                }`}
                onClick={() => setGlobalFilter('all')}
              >
                All
              </button>
              <button
                className={`filter btn btn-common ${
                  globalFilter === 'work' && 'active'
                }`}
                onClick={() => setGlobalFilter('work')}
              >
                Work
              </button>
              <button
                className={`filter btn btn-common ${
                  globalFilter === 'travel' && 'active'
                }`}
                onClick={() => setGlobalFilter('travel')}
              >
                Travels
              </button>
              <button
                className={`filter btn btn-common ${
                  globalFilter === 'event' && 'active'
                }`}
                onClick={() => setGlobalFilter('event')}
              >
                Events
              </button>
            </div>
          </div>
          <div
            id='portfolio'
            className='col-md-12 row'
            style={styles.portfolioContainer}
          >
            {filteredImage.map(({ img, filter, link }, key) => {
              return (
                <PortfolioItem
                  key={key}
                  img={img}
                  link={link}
                  filter={filter}
                  globalFilter={globalFilter}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id='Recommendations' className='container'>
        <h2 className='section-title'>Testimonials</h2>

        <div className='container'>
          <div className='row' style={styles.testimonialContainer}>
            <div className='col-md-offset-2 col-md-8'>
              
               <Carousel showArrows={false} showStatus={false} infiniteLoop autoPlay showThumbs={false}>
                {testimonials.map(
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
              </Carousel> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
