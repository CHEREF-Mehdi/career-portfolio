import * as React from 'react';
import { IResumeList } from '../../../store/utils/dataTypes';
import { ResumeItem } from '../ResumeItem';

interface IResumeListUI extends IResumeList {
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  animation:string
}

export const ResumeList: React.FC<IResumeListUI> = ({
  icon,
  items,
  title,
  mapLinks,
  setOpenModal,
  animation
}) => {
  return (
    <div className={`education wow ${animation}`} data-wow-delay='0.3s'>
      <ul className='timeline'>
        <li>
          <i className={icon}></i>
          <h2 className='timelin-title'>{title}</h2>
        </li>
        {items.map((element, key) => (
          <ResumeItem
            setOpenModal={setOpenModal}
            key={key}
            index={key}
            item={element}
            mapLinks={mapLinks}
            show={title === 'experience' && key === 0}
          />
        ))}
      </ul>
    </div>
  );
};
