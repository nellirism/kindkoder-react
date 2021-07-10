import React from "react";

function Nav({ pages, setPage }) {
  return (
    <nav className="navbar sticky-top bg-white">
      <div className="container-fluid align-middle">
        <a className="navbar-brand" href="/">
          <img
            src="./images/kindk.png"
            alt=""
            width="40"
            height="34"
            className="d-inline-block align-text-top text-dark"
          ></img>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn"></input>
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a onClick={() => setPage(pages[1])}>Contact</a>
          </li>
          <li>
            <a onClick={() => setPage(pages[2])}>Story</a>
          </li>
          <li>
            <a onClick={() => setPage(pages[0])}>Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
