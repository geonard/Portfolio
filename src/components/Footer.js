import React from 'react';
import './Footer.css'; // Optionnel pour styles spécifiques

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Georges LAMBERT Portfolio. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
