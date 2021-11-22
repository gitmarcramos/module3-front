import React from "react";
import "./Loader.css";
import { Link } from "react-router-dom";

export default function Loader() {
  return (
    <Link to="/home">
      <div id="index-loader">
        <img
          src="./../../../Images/logo/awesome-quote-logo.png"
          alt="Awesome Quotes logo"
        />
        <h1 className="body">
          Fetching the best punchlines and conversations on the Web...
        </h1>
      </div>
    </Link>
  );
}
