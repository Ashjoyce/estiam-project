import React from 'react';
import logo from '../logo.svg';

function Sidebar() {
  return (
    <div className="sidebar">
         <img src={logo} className="App-logo" alt="logo" />
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="#gestion">gestion</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;