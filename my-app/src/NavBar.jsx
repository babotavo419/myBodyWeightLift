// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure to create this CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/weight-equalizer" className="nav-item">Weight Equalizer</Link>
        </li>
        <li>
          <Link to="/calorie-counter" className="nav-item">Calorie Counter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
