import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <p className='NavBar-Name'>
        <Link to="" className='HomeLink'>
          AUTOSUSADOS.COM
        </Link>
      </p>
      <input type="search" placeholder='Busca tu vehiculo preferido ...' name="" id="searchBar" />
      <p><Link to="/login" className='navLink navLink-Header'>Login</Link> / <Link to="/register" className='navLink navLink-Header'>Register</Link></p>
    </nav>
  );
};

export default Navbar;