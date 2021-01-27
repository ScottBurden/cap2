import React from 'react';
import { NavLink } from 'react-router-dom';

import "./App.css"


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" exact to="/">Home</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/bride">Bride</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/grid">Grid</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/card">Card</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/people">People</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/list">List</NavLink> 
          </li> */}
        </ul>
      </div>
    </nav>
  );
}


export default NavBar

export default NavBar
