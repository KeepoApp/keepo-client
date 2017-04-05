import React, { Component } from 'react'
import { render } from 'react-dom'

import Box, { VBox, Center } from 'react-layout-components'

class Login extends Component {
  style = {
    page: {
      width: '100%',
      minWidth: '300px',
      background: '#574D68',
      backgroundSize: 'cover',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginBox: {
      minHeight: '30%',
      flexDirection: 'column',
      background: '#FFF',
    },
    author: {
      color: '#FFF',
      padding: '10px',
      fontSize: '0.5em'
    }
  }

  render() {
    return (
      <VBox style={this.style.page} width='100%' height='100vh'>
        <Center width='30%' height='30%' style={{ marginTop: '-100px' }}>
          <img src="https://raw.githubusercontent.com/jvhoven/Keepo/master/assets/img/keep-calm.png" alt="" />
        </Center>
        <Center style={this.style.loginBox} width='30%'>
          <Box>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
          </Box>
        </Center>
        <Center style={this.style.author} width='30%'>
          <p>Made with <i className="fa fa-heart"></i> by Wesley de Bruijn and Jeffrey van Hoven</p>
        </Center>
      </VBox>
    )
  }
}

render(
  <Login />,
  document.getElementById('app')
)