import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='container '>
      <nav className='navbar navbar-expand-lg text-dark  py-3 '>
        <Link to='/' className='navbar-brand text-dark'>
          The Coctail App
        </Link>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link text-dark'>
                Home
              </Link>
            </li>
            <li className='nav-item text-dark'>
              <Link to='/about' className='nav-link text-dark'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
