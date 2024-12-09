import React from 'react';
import './Header.css'; // Optionnel pour styles spécifiques

function Header() {
  return (
    <header className="header">
      <h1>Georges LAMBERT Portfolio</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#cv">CV</a></li>
          <li><a href="#certificats">Certificats</a></li>
          <li><a href="#portfolio">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
