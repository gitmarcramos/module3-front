import React from "react";
import "./InputForm.css";

export default function InputForm(props) {

    const {type, id, name, placeholder, isRequired, label} = props;

  return (
    <div className="input-container">
    <label className="body-bold" htmlFor={id}>{label}</label>
    <span className="error-message">Error message if needed</span>
      <input
        className="input"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={isRequired}
      ></input>
    </div>
  );
}
