import React from "react";
import "./MenuSecond.css";
import { Link } from "react-router-dom";

export default function MenuSecond(props) {
  return (
      <nav className="menu_container_second">
        <Link className="nav-logo" to="/home">
          <img
            src="./../../../Images/logo/awesome-quote-logo-inline.png"
            alt="Awesome Quotes Logo inline"
          />
        </Link>
      </nav>
  );
}
