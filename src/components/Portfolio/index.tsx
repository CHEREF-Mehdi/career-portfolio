import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio: React.FC = () => {
  const { items } = useSelector(
    (state: IAppState) => state.portfolio
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
          <div className='row'>
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
      {/* //   <!-- Recommendation Section start --> 
      <div id='Recommendations' className='container'>
        <h2 className='section-title wow flipInX' data-wow-delay='0.4s'>
          Recommendations
        </h2>
        <div
          data-wow-delay='0.4s'
          id='carouselExampleControls'
          className='carousel slide wow fadeInDown'
          data-ride='carousel'
          data-interval='0'
        >
          <div className='carousel-inner' id='SlideContainer'>
            <ol id='ol-carou-indic' className='carousel-indicators'>
              {recommendations.map((item, key) => {
                return (
                  <li
                    key={key}
                    data-target='#carouselExampleControls'
                    data-slide-to={key}
                    className={key === 0 ? 'active' : ''}
                  ></li>
                );
              })}
            </ol>
            <div id='slideContainer'>
              {recommendations.map(({ src, refProfile }, key) => {
                return (
                  <div
                    key={key}
                    className={
                      'carousel-item item' + (key === 0 ? ' active' : '')
                    }
                  >
                    <RecommendationItem src={src} refProfile={refProfile} />
                  </div>
                );
              })}
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleControls'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleControls'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
      {/* // <!-- Recommendation Section Ends --> */}
    </section>
  );
};
