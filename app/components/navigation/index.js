import React from 'react';

import Profile from '../profile/index';
import './navigation.less';

const Navigation = () => (
  <nav>
    <div className="container">
      <div className="nav__logo" />
      <div className="nav__profile">
        <Profile name="Wesley de Bruijn" image="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/024/093/34f66fd.jpg" />
      </div>
    </div>
  </nav>
);

export default Navigation;
