import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export default function () {
  return (
    <footer className="footer">
      <a href="mailto:parthavndesai1@gmail.com" className="footer_link">
        parthavndesai1@gmail.com
      </a>
      <ul className="footerUL">
        <a href="https://www.instagram.com/parthavndesai/">
          <li className="footerItem">
            <BsInstagram />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/parthav-desai/">
          <li className="footerItem">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://github.com/ParthavDesai">
          <li className="footerItem">
            <BsGithub />
          </li>
        </a>
      </ul>
    </footer>
  );
}
