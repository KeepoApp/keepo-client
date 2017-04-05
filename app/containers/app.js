import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from './pages/login/index';
import Session from './pages/session/index';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/session" component={Session} />
    </div>
  </Router>
);

export default App;
