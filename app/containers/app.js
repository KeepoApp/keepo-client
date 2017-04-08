import React, { Component } from 'react';
import auth from 'firebase/auth';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import PrivateRoute from '../components/routes/private';
import PublicRoute from '../components/routes/public';
import Login from './pages/login/index';
import Session from './pages/session/index';

export default class App extends Component {
  state = {
    loading: true,
    authenticated: false,
  }

  componentDidMount() {
    auth().getRedirectResult().then(
      ({ user }) => {
        if (user) {
          this.setState({
            authenticated: true,
            loading: false
          })
        } else {
          this.setState({
            authenticated: false,
            loading: false
          })
        }
      }
    )
  }

  render() {
    return this.state.loading ? <h1>Loading...</h1> : (
      <Router>
        <div>
          <PublicRoute authenticated={this.state.authenticated} exact path="/login" component={Login} />
          <PrivateRoute authenticated={this.state.authenticated} path="/" component={Session} />
        </div>
      </Router>
    );
  }
}
