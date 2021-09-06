import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllData, IAppStateAPIAction } from '../../store/ducks/dispatchData';
import { HeroArea } from './HeroArea';
import { NavBar } from './NavBar';

export const Header: React.FC = () => {
  const dispatch: React.Dispatch<IAppStateAPIAction> = useDispatch();
  React.useEffect(() => {dispatch(getAllData())}, [dispatch]);
  return (
    <header id='header-wrap'>
      <NavBar />
      <HeroArea />
    </header>
  );
};
