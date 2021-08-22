import * as React from 'react';
import { IServiceItem } from '../../../store/ducks/initialStates';

export const ServiceItem: React.FC<IServiceItem> = ({ name, detail, icon }) => {
  return (
    <div className='col-md-6 col-lg-3 col-xs-12'>
      <div className='services-item wow fadeInDown' data-wow-delay='0.3s'>
        <div className='icon'>
          <i className={icon} aria-hidden='true'></i>
        </div>
        <div className='services-content'>
          <h3>
            <a href='#services'>{name}</a>
          </h3>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
};
