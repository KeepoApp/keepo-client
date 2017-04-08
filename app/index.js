import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
import configureStore from './configureStore';
import '../config/firebase';
import './global.less';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app'),
);
