// Routing.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './constants/routes';

// Import your components for each route
import Home from './components/Home';
import About from './components/About';

const Routing = () => {
  return (
    <Router>
      <Switch>
        {Object.values(routes).map((route) => (
          <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
};

export default React.memo(Routing);
