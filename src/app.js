import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { menuConfig } from './constants/configs/menu_config';
import withTitle from './hoc/withTitle';
import withLogging from './hoc/withLogging';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        {Object.values(menuConfig).map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.secure ? SecuredRoute : NonSecuredRoute}
          />
        ))}

        {/* Add a catch-all route for unknown routes */}
        <Route path="*" component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;
