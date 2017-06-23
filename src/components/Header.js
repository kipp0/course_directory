import React from 'react';
import { NavLink } from 'react-router-dom';

// for setting active styles or classes for navlink items
// activeStyle={}
// activeClassName={}
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses/HTML">Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;
