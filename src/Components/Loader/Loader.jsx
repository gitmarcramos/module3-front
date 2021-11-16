import React from "react";
import "./Loader.css";

export default function Loader (){

    return (
      <div id="index-loader" className="main">
        <img
          src="./../../../Images/logo/awesome-quote-logo.png"
          alt="Awesome Quotes logo"
        />
        <h1 className="body">
          Fetching the best punchlines and conversations on the Web...
        </h1>
      </div>
    );
}
