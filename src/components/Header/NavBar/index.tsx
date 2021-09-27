import React from 'react';
import ReactGa from 'react-ga';
import { GAEventCategories } from '../../../utils';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavBar: React.FC = () => {
  const onNavigate = (goTo: string) => {
    ReactGa.event({
      category: GAEventCategories.MENU_NAVIGATION,
      action: 'Go to ' + goTo,
    });
  };

  return (
    <Navbar
      collapseOnSelect
      fixed='top'
      expand='lg'
      bg='dark'
      variant='dark'
      className='indigo'
    >
      <Container>
        <Navbar.Brand href='#hero-area'>
          <img
            src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
            alt='CHEREF Mehdi'
          />
        </Navbar.Brand>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </div>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav
            defaultActiveKey='#hero-area'
            className='justify-content-end'
            style={{ width: '100%' }}
          >
            <Nav.Link href='#hero-area' onClick={() => onNavigate('Home')}>
              Home
            </Nav.Link>
            <Nav.Link href='#about' onClick={() => onNavigate('About')}>
              About
            </Nav.Link>
            <Nav.Link href='#services' onClick={() => onNavigate('Services')}>
              Services
            </Nav.Link>
            <Nav.Link href='#resume' onClick={() => onNavigate('Resume')}>
              Resume
            </Nav.Link>
            <Nav.Link
              href='#portfolios'
              onClick={() => onNavigate('About my journey')}
            >
              About my journey
            </Nav.Link>
            <Nav.Link
              href='#Recommendations'
              onClick={() => onNavigate('Testimonials')}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link href='#contact' onClick={() => onNavigate('Contact')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
