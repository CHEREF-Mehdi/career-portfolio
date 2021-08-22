import React from 'react';

export const NavBar: React.FC = () => {
  return (
    // <!-- Navbar Start -->
    <nav className='navbar navbar-expand-lg fixed-top scrolling-navbar indigo'>
      <div className='container'>
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className='navbar-header'>
          <a href="#hero-area" className='navbar-brand'>
            <img
              src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
              alt='CHEREF Mehdi'
            />
          </a>
        </div>

        <div className='collapse navbar-collapse' id='main-navbar'>
          <ul className='onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix'>
            <li className='nav-item active'>
              <a className='nav-link' href='#hero-area'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#services'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#resume'>
                Resume
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#portfolios'>
                About my journey
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#Recommendations'>
                Recommendations
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Mobile Menu Start --> */}
      <ul className='onepage-nev mobile-menu'>
        <li>
          <a href='#hero-area'>Home</a>
        </li>
        <li>
          <a href='#about'>about</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#resume'>resume</a>
        </li>
        <li>
          <a href='#portfolio'>About my journey</a>
        </li>
        <li>
          <a href='#Recommendations'>Recommendations</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      {/* <!-- Mobile Menu End --> */}
    </nav>
    // <!-- Navbar End -->
  );
};
