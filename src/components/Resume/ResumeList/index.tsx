import * as React from 'react';
import { ResumeItem } from '../ResumeItem';

export const ResumeList: React.FC<NS_ReduxNS.IResumeList> = ({
  icon,
  items,
  title,
  mapLinks,
}) => {
  return (
    <div className='education wow fadeInRight' data-wow-delay='0.3s'>
      <ul className='timeline'>
        <li>
          <i className={icon}></i>
          <h2 className='timelin-title'>{title}</h2>
        </li>
        {items.map((element, key) => (
          <ResumeItem
            key={key}
            index={key}
            item={element}
            mapLinks={mapLinks}
          />
        ))}
      </ul>
    </div>
  );
};
