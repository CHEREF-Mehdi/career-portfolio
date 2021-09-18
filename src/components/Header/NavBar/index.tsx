import React from 'react';
import ReactGa from 'react-ga';
import { GAEventCategories } from '../../../utils';

export const NavBar: React.FC = () => {
  const onNavigate = (goTo: string) => {
    ReactGa.event({
      category: GAEventCategories.MENU_NAVIGATION,
      action: 'Go to ' + goTo,
    });
  };

  return (
    <nav className='navbar navbar-expand-lg fixed-top scrolling-navbar indigo'>
      <div className='container'>
        <div className='navbar-header'>
          <a href='#hero-area' className='navbar-brand'>
            <img
              src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
              alt='CHEREF Mehdi'
            />
          </a>
        </div>

        <div className='collapse navbar-collapse' id='main-navbar'>
          <ul className='onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix'>
            <li className='nav-item active' onClick={() => onNavigate('Home')}>
              <a className='nav-link' href='#hero-area'>
                Home
              </a>
            </li>
            <li className='nav-item' onClick={() => onNavigate('About')}>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item' onClick={() => onNavigate('Services')}>
              <a className='nav-link' href='#services'>
                Services
              </a>
            </li>
            <li className='nav-item' onClick={() => onNavigate('Resume')}>
              <a className='nav-link' href='#resume'>
                Resume
              </a>
            </li>
            <li
              className='nav-item'
              onClick={() => onNavigate('About my journey')}
            >
              <a className='nav-link' href='#portfolios'>
                About my journey
              </a>
            </li>
            <li className='nav-item' onClick={() => onNavigate('Testimonials')}>
              <a className='nav-link' href='#Recommendations'>
                Testimonials
              </a>
            </li>
            <li className='nav-item' onClick={() => onNavigate('Contact')}>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Mobile Menu Start --> */}
      <ul className='onepage-nev mobile-menu'>
        <li onClick={() => onNavigate('Home')}>
          <a href='#hero-area'>Home</a>
        </li>
        <li onClick={() => onNavigate('About')}>
          <a href='#about'>About</a>
        </li>
        <li onClick={() => onNavigate('Services')}>
          <a href='#services'>Services</a>
        </li>
        <li onClick={() => onNavigate('Resume')}>
          <a href='#resume'>Resume</a>
        </li>
        <li onClick={() => onNavigate('About my journey')}>
          <a href='#portfolio'>About my journey</a>
        </li>
        <li onClick={() => onNavigate('Testimonials')}>
          <a href='#Recommendations'>Testimonials</a>
        </li>
        <li onClick={() => onNavigate('Contact')}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      {/* <!-- Mobile Menu End --> */}
    </nav>
  );
};
