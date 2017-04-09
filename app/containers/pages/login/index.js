import React from 'react';
import auth from 'firebase/auth';
import { Button } from 'semantic-ui-react';

import './login.less';

const Login = () => {
  const login = () => {
    const provider = new auth.GoogleAuthProvider();
    auth().signInWithRedirect(provider);
  };

  return (
    <div className="login flex-center">
      <div className="login__box">
        <div className="box__logo flex-center">
          <img src="/assets/img/logo.png" alt="" />
          <div className="divider" />
        </div>
        <div className="box__social">
          <h2>Login</h2>
          <p>
            Give thanks to the most high. Stay focused.
            Always remember in the jungle there’s a lot of they in there.
          </p>
          <Button primary onClick={() => login()}>Login with Google</Button>
        </div>
      </div>
      <div className="login__love">
        <p>Made with <i className="fa fa-heart" /> by Wesley de Bruijn and Jeffrey van Hoven</p>
      </div>
    </div>
  );
};

export default Login;
