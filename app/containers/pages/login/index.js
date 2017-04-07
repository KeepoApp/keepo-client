import React from 'react';

import './login.less';

const Login = () => (
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
        <div className="g-signin2" data-onsuccess="onSignIn" />
      </div>
    </div>
    <div className="login__love">
      <p>Made with <i className="fa fa-heart" /> by Wesley de Bruijn and Jeffrey van Hoven</p>
    </div>
  </div>
);

export default Login;
