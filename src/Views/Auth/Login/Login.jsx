import React from "react";
import {Link} from "react-router-dom"
import MenuSecond from "./../../../Components/MenuSecond/MenuSecond";
import "./../../../styles/form.css";

export default class Login extends React.Component {
  render() {
    return (
      <>
        <MenuSecond />
        <h1 className="title">Log in</h1>
        <div className="login-container">
          <form className="form">
            <div className="input-container">
              <label htmlFor="email" className="body-bold">
                Email
              </label>
              <input type="text" className="input" id="email" placeholder="Your email"/>
            </div>

            <div className="input-container">
              <label htmlFor="password" className="body-bold">
                Password
              </label>
              <input type="password" className="input" id="password" placeholder="Enter your password"/>
            </div>

            <button className="button--primary">
            Let's go!
          </button>

          <div className="no-account-yet">
            <Link to="/account-creation" className="body-bold grey">No account yet?</Link>
          </div>


          </form>
        </div>
      </>
    );
  }
}
