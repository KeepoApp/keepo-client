import React, { Component } from 'react';
import Box, { VBox, Center } from 'react-layout-components';

import './login.less';

export default class Login extends Component {
  render() {
    return (
      <VBox className='login'>
        <Center className='login__box login__box--logo'> 
          <img src='https://raw.githubusercontent.com/wesleydebruijn/keepo/master/public/img/logo.png' alt='' />
        </Center>
        <Center className='login__box login__box--form'>
          <Box>
            <div className='g-signin2' data-onsuccess='onSignIn'></div>
          </Box>
        </Center>
        <Center className='login__box login__box--love'>
          <p>Made with <i className='fa fa-heart'></i> by Wesley de Bruijn and Jeffrey van Hoven</p>
        </Center>
      </VBox>
    )
  }
}
