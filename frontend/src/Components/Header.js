import React from "react";

const Header = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand sf" href="/" >
             Klimb Assignment 
        </a>
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
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <a className="nav-link sf1" href="/">
                ADD file
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link sf1" href="/view">
                View Employee
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
