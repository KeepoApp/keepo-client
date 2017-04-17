import React from 'react';

import './navigation.less';

const Navigation = () => (
  <nav>
    <div className="container">
      <div className="nav__logo" />
      <ul>
        <li className="active">
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
      <div className="nav__logout">
        Sign out &nbsp;&nbsp; <i className="fa fa-sign-out" />
      </div>
    </div>
  </nav>
);

export default Navigation;
