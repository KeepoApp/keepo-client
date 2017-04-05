import React, { Component } from 'react'
import { render } from 'react-dom'

const Test = () => (
  <h1>Hello world!</h1>
)

render(
  <Test />,
  document.getElementById('app')
)