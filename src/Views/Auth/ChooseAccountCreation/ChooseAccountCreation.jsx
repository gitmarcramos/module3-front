import React from "react";
import "./ChooseAccountCreation.css";
import MenuSecond from "./../../../Components/MenuSecond/MenuSecond";
import { Link } from "react-router-dom";

export default function ChooseAccountCreation(props) {
  return (
    <>
      <MenuSecond />
      <h1 className="title">Create an account</h1>
      <div className="account-creation-container">
        <div className="buttons-choice-container">
          <Link className="button--primary" to="create-account">
            <span className="title">Create with email</span>
          </Link>
          <span className="body grey">Or</span>
          <img
            src="./../../../../public/Images/accounts/appleid_button@2x-2.png"
            alt="signin with apple"
          />
          <img
            src="./../../../../public/Images/accounts/btn_google_signin_light_normal_web@2x.png"
            alt="signin with google"
          />
        </div>
      </div>
    </>
  );
}
