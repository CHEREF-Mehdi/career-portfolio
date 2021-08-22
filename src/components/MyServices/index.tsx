import * as React from 'react';

export const MyServices: React.FC = () => {
  return (
    // <!-- Services Section Start -->
    <section id='services' className='services section-padding'>
      <h2 className='section-title wow flipInX' data-wow-delay='0.4s'>
        What I do
      </h2>
      <div className='container'>
        <div className='row' id='servicesDiv'></div>
      </div>
    </section>
    // <!-- Services Section End -->
  );
};
