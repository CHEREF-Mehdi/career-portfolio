import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import ReactGa from 'react-ga';

const App: React.FC = () => {
  const gaTrackingId: string = process.env.REACT_APP_GA_TRAKING_ID || '';
  React.useEffect(() => {
    console.log(gaTrackingId);
    ReactGa.initialize(gaTrackingId);
    ReactGa.pageview('/');
  }, [gaTrackingId]);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Container />
    </Provider>
  );
};

export default App;
