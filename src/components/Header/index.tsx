import React from 'react';
import { HeroArea } from './HeroArea';
import { NavBar } from './NavBar';

export const Header: React.FC = () => {
  return (
    <header id='header-wrap'>
      <NavBar />
      <HeroArea />
    </header>
  );
};
