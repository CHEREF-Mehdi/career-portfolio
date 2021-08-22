import * as React from 'react';

export const Portfolio: React.FC = () => {
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
              <button  className='filter active btn btn-common' data-filter='all'>
                All
              </button>
              <button className='filter btn btn-common' data-filter='.design'>
                Work
              </button>
              <button className='filter btn btn-common' data-filter='.development'>
                Travels
              </button>
              <button className='filter btn btn-common' data-filter='.print'>
                Events
              </button>
            </div>
          </div>
          <div
            id='portfolio'
            className='row wow fadeInDown'
            data-wow-delay='0.4s'
          ></div>
        </div>
      </div>
      <br />
      <br />
      {/* //   <!-- Recommendation Section start --> */}
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
            <ol id='ol-carou-indic' className='carousel-indicators'></ol>
            <div id='slideContainer'></div>
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
