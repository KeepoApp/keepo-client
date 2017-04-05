import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from './pages/login/index';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
    </div>
  </Router>
);

export default App;
