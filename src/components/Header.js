import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'

function Header(props) {
  return (
    <nav>
      <div><NavLink to="/counter">Counter</NavLink></div>
      <div><NavLink to="/todolist">TodoList</NavLink></div>
    </nav>
  );
}

export default Header;