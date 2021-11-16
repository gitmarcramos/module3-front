import { React, Component } from "react";
import "./menu.css";

export default class Header extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <nav className="menu_container">
        <div className="menu_container__nav">
          <div className="burger" id="menu_burger">
            <div className="burger__line burger__line--1"></div>
            <div className="burger__line burger__line--2"></div>
            <div className="burger__line burger__line--3"></div>
          </div>

          <a className="nav-logo" href="/home">
            <img
              src="/images/logo/awesome-quote-logo-inline.png"
              alt="Awesome Quotes logo"
            />
          </a>

          <a href="/auth/login">
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
          </a>
        </div>

        <div className="line-separation"></div>

        <div className="menu" id="menu_page">
          <div className="menu__item menu__item--quote-related">
            <a href="/quotes/create-quote" className="body-bold">
              <img src="/images/icons/menu-publish-icon.png" alt="" />
              Publish an Awesome Quote
            </a>
            <a href="/home/best-quotes" className="body">
              Best quotes
            </a>
            <a href="/filter" className="body">
              Filter
            </a>
          </div>

          <div className="menu__item menu__item--account">
            <a href="/users/my-account" className="body-bold">
              <img src="/images/icons/menu-account-icon.png" alt="" /> My
              account
            </a>
          </div>

          <div className="menu__item menu__item--legal">
            <a href="/about" className="body">
              About
            </a>
            <a href="/terms-and-conditions" className="body">
              Terms and conditions
            </a>
            <a href="/privacy-policy" className="body">
              Privacy policy
            </a>
          </div>

          {/* {{#if currentUser}}
        <div className="menu__item menu__item--log-out">
            <a href="/auth/logout" className="suggestion-modal">Logout</a>
        </div>
        {{else}} */}
          <div className="menu__item menu__item--log-in">
            <a href="/auth/login" className="suggestion-modal">
              Login
            </a>
          </div>
          <div className="menu__item menu__item--create-account">
            <a href="/auth/create-account" className="suggestion-modal">
              Create an Account
            </a>
          </div>
          {/* {{/if}} */}
        </div>
      </nav>
    );
  }
}
