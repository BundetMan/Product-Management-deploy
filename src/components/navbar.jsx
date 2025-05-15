import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
        <nav className="navbar navbar-expand navbar-light bg-light" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="container" style={{ fontSize: '1.1rem' }}>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav text-decoration-underline text-info">
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/aboutme">About Me </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/feedback">FeedBack </Link>
              </li>
                <li className="nav-item">
                    <Link className="nav-link text-primary" to="/contact">Contact</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
