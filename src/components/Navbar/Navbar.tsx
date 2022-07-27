import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ul>
      <li>
        <img
          src={require('./logo.png')}
          alt="missing file"
          onClick={() => navigate('/')}
        />
      </li>
      <li>
        <Link to="/US">US Universities Only</Link>
      </li>
      <li>
        <Link to="/Search">International Universities</Link>
      </li>
    </ul>
  );
};

export default Navbar;
