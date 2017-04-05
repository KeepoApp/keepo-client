import React, { Component } from 'react'
import { render } from 'react-dom'
import Root from './containers/root'
import configureStore from './configureStore'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('app')
)