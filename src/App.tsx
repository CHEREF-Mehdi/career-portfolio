import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import { wow } from './utils';

import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App: React.FC = () => {
  const gaTrackingId: string = process.env.REACT_APP_GA_TRAKING_ID || '';
  React.useEffect(() => {
    ReactGa.initialize(gaTrackingId);
    ReactGa.pageview(window.location.pathname);
  }, [gaTrackingId]);

  React.useEffect(() => {
    wow.sync();    
  });

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path='/career-portfolio' component={Container} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
