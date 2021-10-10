import React from 'react';
import ReactGa from 'react-ga';
import { GAEventCategories } from '../../../../utils';
import { Navbar, Container, Nav } from 'react-bootstrap';

interface Isection {
  tag: string;
  shown: boolean;
}

const getElementYInterval = (tag: string) => {
  const offset = 100;
  const pageYOffSet = window.pageYOffset;
  const tagOffsetTop = document.getElementById(tag)?.offsetTop;
  const tagOuterHeight = document.getElementById(tag)?.offsetHeight;

  if (tagOffsetTop !== undefined && tagOuterHeight !== undefined)
    return pageYOffSet > tagOffsetTop - offset &&
      pageYOffSet < tagOffsetTop - offset + tagOuterHeight
      ? true
      : false;
  return false;
};

const SECTIONS = (): Array<Isection> => {
  return [
    {
      tag: 'hero-area',
      shown: getElementYInterval('hero-area'),
    },
    {
      tag: 'about',
      shown: getElementYInterval('about'),
    },
    {
      tag: 'services',
      shown: getElementYInterval('services'),
    },
    {
      tag: 'resume',
      shown: getElementYInterval('resume'),
    },
    {
      tag: 'portfolios',
      shown: getElementYInterval('portfolios'),
    },
    {
      tag: 'Recommendations',
      shown: getElementYInterval('Recommendations'),
    },
    {
      tag: 'contact',
      shown: getElementYInterval('contact'),
    },
  ];
};

export const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('hero-area');

  React.useEffect(() => {
    ReactGa.event({
      category: GAEventCategories.SCROLL_TO,
      action: activeSection,
    });
  }, [activeSection]);

  let activeMenu = 'hero-area';
  window.addEventListener('scroll', (event) => {
    SECTIONS().forEach((element) => {
      if (element.shown) {
        if (activeMenu !== element.tag) {
          activeMenu = element.tag;
          setActiveSection(activeMenu);
        }
      }
    });
  });

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
            <Nav.Link
              href='#hero-area'
              active={activeSection === 'hero-area'}
              onClick={() => onNavigate('Home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#about'
              active={activeSection === 'about'}
              onClick={() => onNavigate('About')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href='#services'
              active={activeSection === 'services'}
              onClick={() => onNavigate('Services')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href='#resume'
              active={activeSection === 'resume'}
              onClick={() => onNavigate('Resume')}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href='#portfolios'
              active={activeSection === 'portfolios'}
              onClick={() => onNavigate('About my journey')}
            >
              About my journey
            </Nav.Link>
            <Nav.Link
              href='#Recommendations'
              active={activeSection === 'Recommendations'}
              onClick={() => onNavigate('Testimonials')}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              href='#contact'
              active={activeSection === 'contact'}
              onClick={() => onNavigate('Contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
