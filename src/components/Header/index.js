import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link to={'/'}>
      <span className="navbar-brand mb-0 h1">Knockri</span>
    </Link>
  </nav>
);

export default Header;
