import React from 'react';

import './navigation.less';

const Navigation = () => (
  <nav>
    <div className="nav__logo" />
    <div className="nav__toggler">
      ☰
    </div>
    <ul>
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a href="#">Sessions</a>
      </li>
      <li>
        <a href="#">Account</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
