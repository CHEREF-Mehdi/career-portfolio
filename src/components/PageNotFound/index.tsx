import * as React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils';
import notFound from '../../assets/img/404.png';

export const PageNotFound: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '80vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        <div className='col-md-6'>
          <img
            className='notFoundImg'
            src={notFound}
            alt='404 PAGE NOT FOUND!'
          />
        </div>
      </div>
      <h4 style={{ textAlign: 'center' }}>
        Page not found!{' '}
        <u>
          <Link to={ROUTES.portfolio} style={{}}>
            Go Home
          </Link>
        </u>
      </h4>
    </div>
  );
};
