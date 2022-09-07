import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
export default function Navbar() {
  const removeCSS = () => {
    document.body.classList.remove("nav-open");
  };
  const toggleOpen = () => {
    document.body.classList.toggle("nav-open");
  };
  return (
    <>
      <button className="nav-toggle" onClick={() => toggleOpen()}>
        <Hamburger />
      </button>
      <nav className="nav">
        <ul>
          <li onClick={removeCSS}>
            <a href="#home">Home</a>
          </li>
          <li onClick={removeCSS}>
            <a href="#about">About</a>
          </li>
          <li onClick={removeCSS}>
            <a href="#experience">Experience</a>
          </li>
          <li onClick={removeCSS}>
            <a href="#project">Projects</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
