import React from "react";
import myresume from '../images/myresume.pdf'
import './navbar.css'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary  "  >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-2">  <a className="nav-link" href="/about">  About </a> </li>
          <li className="nav-item mx-2">  <a className="nav-link" href={"/portfolio"}>  Projects </a> </li>
          <li className="nav-item mx-2">  <a className="nav-link " target='blank' rel="noopener noreferrer" href={myresume}>  Resume </a> </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
