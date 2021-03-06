import React, { useState } from "react";
import "./Menu.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./../../Components/Auth/UserContext";
import APIHandler from "./../../api/handler";

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  const { isLoggedIn, currentUser, setCurrentUser } = useAuth();
  const history = useHistory();

  const openMenu = (e) => {
    setOpen(!isOpen);
  };

  const handleLogout = async (e) => {
    try {
      await APIHandler.get("/api/auth/logout");
      setCurrentUser(null);
      history.push("/auth/login");
    } catch (err) {
      console.error(err)
    }
  };

  const menuClass = isOpen ? "menu menu-reveal" : "menu";

    return (
      <nav className="menu_container">
        <div className="menu_container__nav">
          <div className="burger" id="menu_burger" onClick={openMenu}>
            <div className="burger__line burger__line--1"></div>
            <div className="burger__line burger__line--2"></div>
            <div className="burger__line burger__line--3"></div>
          </div>

          <Link className="nav-logo" to="/home">
            <img
              src="/images/logo/awesome-quote-logo-inline.png"
              alt="Awesome Quotes logo"
            />
          </Link>

          <Link to="/auth/login">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.5" cy="12" r="12" fill="#444444" />
              <circle
                cx="12.5"
                cy="12"
                r="9.88235"
                stroke="#FFFCEC"
                strokeWidth="0.705882"
              />
              <path
                d="M18.147 17.647V16.2353C18.147 15.4864 17.8495 14.7682 17.32 14.2387C16.7905 13.7092 16.0723 13.4117 15.3235 13.4117H9.67645C8.9276 13.4117 8.20943 13.7092 7.67991 14.2387C7.1504 14.7682 6.85292 15.4864 6.85292 16.2353V17.647"
                stroke="#FFFCEC"
                strokeWidth="0.705882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 10.5882C14.0593 10.5882 15.3235 9.32408 15.3235 7.76469C15.3235 6.2053 14.0593 4.94116 12.5 4.94116C10.9406 4.94116 9.67643 6.2053 9.67643 7.76469C9.67643 9.32408 10.9406 10.5882 12.5 10.5882Z"
                stroke="#FFFCEC"
                strokeWidth="0.705882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="line-separation"></div>

        <div className={menuClass} id="menu_page">
          <div className="menu__item menu__item--quote-related">

          {/* If the user is logged, the followig code appears */}
            {isLoggedIn === true && (
              <div className="menu__item menu__item--account">
                <h2 className="title">
                  Hello <span className="title">{currentUser.pseudo}</span>
                </h2>
                <span className="publication-date">a.k.a</span>
                <h3 className="body-bold">{currentUser.name}</h3>
                <Link to={"/users/" + currentUser.pseudo} className="published-by-link">
                  My account
                </Link>
              </div>
            )}

            <Link to="/quotes/create-quote" className="body-bold">
              <img src="./../../../Images/icons/menu-publish-icon.svg" alt="" />
              Publish an Awesome Quote
            </Link>
            <Link to="/home/best-quotes" className="body-bold">
              <img
                src="./../../../Images/icons/menu-best_quotes-icon.svg"
                alt=""
              />
              Best quotes
            </Link>
            <Link to="/filter" className="body-bold">
              <img src="./../../../Images/icons/menu-filter-icon.svg" alt="" />
              Filter
            </Link>
          </div>

          <div className="menu__item menu__item--legal">
            <Link to="/about" className="body">
              About
            </Link>
            <Link to="/terms-and-conditions" className="body">
              Terms and conditions
            </Link>
            <Link to="/privacy-policy" className="body">
              Privacy policy
            </Link>
          </div>

          { isLoggedIn ? (
        <div className="menu__item menu__item--log-out">
            <div style={{cursor: "pointer"}}className="suggestion-modal" onClick={handleLogout}>
              Logout
            </div>
        </div>
          ) : (
          <div className="menu__item menu__item--log-in">
            <Link to="/auth/login" className="suggestion-modal">
              Login
            </Link>
          </div>
          )}
        </div>
      </nav>
    );
}
