import React from 'react';
import './Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div>
        <img
          className="logo"
          src={require('./logo.png')}
          alt="missing file"
          onClick={() => navigate('/')}
        />
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/US">US Universities Only</Link>
        </li>
        <li>
          <Link to="/Search">Search for your University</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
