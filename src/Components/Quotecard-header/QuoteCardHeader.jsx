import React from "react";
import "./QuoteCardHeader.css";
import { Link } from "react-router-dom";
import ModalUpdateQuote from "./../../Components/ModalUpdateQuote/ModalUpdateQuote"

export default function QuoteCardHeader(props) {
  return (
    <>
      <div className="quote_header" key={props.key}>
        <div className="quote_header__infos">
          <div className="quote_header__infos--text">
            <span className="published-by">Published by: </span>
            <Link to={"/users/"+props.publisher.pseudo} className="published-by-link">
              {props.publisher.pseudo}
            </Link>
            <span className="publication-date">
              on{" "}
              <span id="quote-date" className="publication-date">
                {props.date}
              </span>
            </span>
          </div>

          <div className="quote_header__infos--kebab">
            <div className="kebab-dot"></div>
            <div className="kebab-dot"></div>
            <div className="kebab-dot"></div>
          </div>
        </div>

        <div className="quote_header__hashtags">


          {(props.hashtags.length!=0 && props.hashtags[0]!="") && props.hashtags.map((hashtag, i) => {
            return (
              <Link to="#" className="hashtags" key={i}>
                #{hashtag}
              </Link>
            );
          })}
          
        </div>
        <div className="line-separation"></div>
      </div>
    </>
  );
}
