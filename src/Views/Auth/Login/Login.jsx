import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "./../../../auth/UserContext";
import APIHandler from "./../../../api/handler";
import MenuSecond from "./../../../Components/MenuSecond/MenuSecond";
import "./../../../styles/form.css";

export default function Login() {
  const [mail, setMail] = useState("jazz@mail.com");
  const [password, setPassword] = useState("123");
  const { isLoggedIn, setCurrentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/api/auth/login", { mail, password });
      setCurrentUser(apiRes.data.currentUser);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  return isLoggedIn ? (
    <Redirect to="/home" />
  ) : (
    <>
      <MenuSecond />
      <h1 className="title">Log in</h1>
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="mail" className="body-bold">
              Email
            </label>
            <input
              type="text"
              className="input"
              id="mail"
              name="mail"
              placeholder="Your email"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="password" className="body-bold">
              Password
            </label>
            <input
              type="password"
              className="input"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button--primary">Let's go!</button>

          <div className="no-account-yet">
            <Link to="/auth/account-creation" className="body-bold grey">
              No account yet?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
