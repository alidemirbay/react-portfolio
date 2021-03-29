import React from "react";
import myresume from '../images/myresume.pdf'
const style = {
  fontSize: "24px",
  height: "100px",
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary  text-dark" style={style} >
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
        <ul className="navbar-nav">
          <li className="nav-item"> {" "} <a className="nav-link" href="/about"> {" "} About{" "} </a>{" "} </li>
          <li className="nav-item "> {" "} <a className="nav-link" href={"/portfolio"}> {" "} Portfolio{" "} </a>{" "} </li>
          <li className="nav-item"> {" "} <a className="nav-link " taget='blank' href={myresume}> {" "} Resume{" "} </a>{" "} </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
