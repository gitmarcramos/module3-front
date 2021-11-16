import { React, Component } from "react";
import "./QuoteCard.css";

import QuoteCardHeader from "./../../Components/Quotecard-header/QuoteCardHeader";
import QuoteCardBody from "./../../Components/Quote-body/QuoteCardBody";
import QuoteCardFooter from "./../../Components/QuoteCard-footer/QuoteCardFooter";

export default function QuoteCard(props) {
  console.log(props)
  return (
    <div className="main">
      <div className="quote">
        <QuoteCardHeader
          date={props.data.dateCreatedAt}
          publisher={props.data.publisher}
          hashtags={props.data.hashtags}
        />
        <QuoteCardBody quote={props.data.quotes} />
        <QuoteCardFooter />
      </div>
    </div>
  );
}
