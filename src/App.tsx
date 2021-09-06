import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { MyServices } from './components/MyServices';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Header />
      <AboutMe />
      <MyServices />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <Modal />
    </Provider>
  );
};

export default App;
