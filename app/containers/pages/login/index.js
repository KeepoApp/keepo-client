import React from 'react';
import Box, { VBox, Center } from 'react-layout-components';

import './login.less';

const Login = () => (
  <VBox className="login">
    <Center className="login__box login__box--form">
      <Box>
        <img src="/assets/img/logo.png" alt="" />
      </Box>
      <Box className="login__box login__box--social">
        <h2>Login</h2>
        <p>
          Give thanks to the most high. Stay focused.
          Always remember in the jungle there’s a lot of they in there.
        </p>
        <Box>
          <div className="g-signin2" data-onsuccess="onSignIn" />
        </Box>
      </Box>
    </Center>
    <Center className="login__box login__box--love">
      <p>Made with <i className="fa fa-heart" /> by Wesley de Bruijn and Jeffrey van Hoven</p>
    </Center>
  </VBox>
);

export default Login;
