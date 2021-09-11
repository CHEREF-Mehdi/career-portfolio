import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Container/>
    </Provider>
  );
};

export default App;
