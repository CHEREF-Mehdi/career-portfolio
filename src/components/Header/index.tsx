import React from 'react';
import { HeroArea } from './HeroArea';
import { NavBar } from './NavBar';

export const Header: React.FC = () => {
  return (
    <div id='on-loading'>
      <header id='header-wrap'>
        <NavBar />
        <HeroArea />
      </header>
    </div>
  );
};
