import * as React from 'react';
import { IRecommendationItem } from '../../../store/ducks/initialStates';

export const RecommendationItem: React.FC<IRecommendationItem> = ({
  refProfile,
  src,
}) => {
  return (
    <>
      <img
        className='mx-auto d-block'
        src={process.env.PUBLIC_URL + src}
        alt='CHEREF Mehdi'
      />
      <div className='carousel-caption d-md-block'>
        <h5>
          <a href={refProfile} target='_blank' rel='noopener noreferrer'>
            Refrent profile
          </a>
        </h5>
      </div>
    </>
  );
};
