import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './pages/login/index'

const App = () => (
  <Router>
    <Route exact path="/" component={Login}/>
  </Router>
)

export default App;