import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';
import { ServiceItem } from './ServiceItem';

export const MyServices: React.FC = () => {
  const services = useSelector((state: IAppState) => state.careerData.services);
  return (
    // <!-- Services Section Start -->
    <section id='services' className='services section-padding'>
      <h2 className='section-title wow flipInX' data-wow-delay='0.4s'>
        What I do
      </h2>
      <div className='container'>
        <div className='row' id='servicesDiv'>
          {services.items.map((item, key) => (
            <ServiceItem
              key={key}
              name={item.name}
              icon={item.icon}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </section>
    // <!-- Services Section End -->
  );
};
