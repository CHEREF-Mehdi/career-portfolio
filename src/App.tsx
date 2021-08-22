import React from 'react';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import { AboutMe } from './components/AboutMe';
import { MyServices } from './components/MyServices';
import { Resume } from './Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Header />
        <AboutMe />
        <MyServices />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer/>
    </Provider>
  );
};

export default App;
