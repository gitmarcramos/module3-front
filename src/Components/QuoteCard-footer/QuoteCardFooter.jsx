import React from "react";
import "./QuoteCardFooter.css";

export default function QuoteCardFooter(props) {

    //! const {currentUser} = useAuth()

  return (
    <div className="quote_social">
      <div className="quote_social__item quote_social__item--like">
        <div className="quote_social-icon quote_social-icon-animate">
          <svg width="22" height="20" viewBox="0 0 22 20" className="svg-fill">
            <path d="M19.5631 2.59133C19.0876 2.08683 18.523 1.68663 17.9016 1.41358C17.2802 1.14054 16.6142 1 15.9415 1C15.2689 1 14.6029 1.14054 13.9814 1.41358C13.36 1.68663 12.7955 2.08683 12.3199 2.59133L11.3331 3.63785L10.3462 2.59133C9.38572 1.57276 8.083 1.00053 6.72464 1.00053C5.36628 1.00053 4.06355 1.57276 3.10305 2.59133C2.14254 3.6099 1.60294 4.99139 1.60294 6.43187C1.60294 7.87235 2.14254 9.25383 3.10305 10.2724L4.08991 11.3189L11.3331 19L18.5763 11.3189L19.5631 10.2724C20.0389 9.76814 20.4162 9.16942 20.6737 8.51045C20.9312 7.85148 21.0637 7.14517 21.0637 6.43187C21.0637 5.71857 20.9312 5.01225 20.6737 4.35328C20.4162 3.69431 20.0389 3.09559 19.5631 2.59133V2.59133Z" />
          </svg>
          <div className="quote_social-svg-icon svg-animate"></div>
          <div className="quote_social-svg-icon"></div>
          <div className="quote_social-svg-icon"></div>
        </div>
        <span className="social-links">Likes</span>
      </div>

      <div className="quote_social__item quote_social__item--share">
        <div className="quote_social-icon">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.800018 10V17.2C0.800018 17.6774 0.989661 18.1352 1.32723 18.4728C1.66479 18.8104 2.12263 19 2.60002 19H13.4C13.8774 19 14.3353 18.8104 14.6728 18.4728C15.0104 18.1352 15.2 17.6774 15.2 17.2V10" />
            <path d="M11.6 4.6L8 1L4.39999 4.6" />
            <path d="M7.99997 1V12.7" />
          </svg>
          <div className="quote_social-svg-icon"></div>
        </div>
        <span className="social-links">Share</span>
      </div>

      <div className="quote_social__item quote_social__item--favorite">
        <div className="quote_social-icon quote_social-icon-animate">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            className="svg-fill"
            <path d="M11 1L14.09 6.92429L21 7.88013L16 12.489L17.18 19L11 15.9243L4.82 19L6 12.489L1 7.88013L7.91 6.92429L11 1Z" />
          </svg>
          <div className="quote_social-svg-icon svg-animate"></div>
          <div className="quote_social-svg-icon"></div>
          <div className="quote_social-svg-icon"></div>
        </div>
        <span className="social-links">Favorites</span>
      </div>
    </div>
  );
}
