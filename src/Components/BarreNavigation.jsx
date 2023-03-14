import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="/logo" className="nav-link">
            Mon logo
          </a>     </li>
        <li className="nav-item">
          <a href="/ Recherche" className="nav-link">
            Recherche
          </a>     </li>
        <li className="nav-item">
          <a href="/Paramètres" className="nav-link">
            Paramètres
          </a>     </li>
        <li className="nav-item">
          <a href="/panier" className="nav-link">
            panier
          </a>     </li>
        <li className="nav-item">
          <a href="/Profil" className="nav-link">
            Profil
          </a>     </li>
      </ul>
    </nav>
  );
}

export default Navbar;
