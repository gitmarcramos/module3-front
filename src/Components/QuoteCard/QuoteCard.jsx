import React, { Component } from "react";
import "./QuoteCard.css";

import QuoteCardHeader from "../Quotecard-header/QuoteCardHeader";
import QuoteCardBody from "../Quote-body/QuoteCardBody";
import QuoteCardFooter from "../QuoteCard-footer/QuoteCardFooter";
import ModalUpdateQuote from "../ModalUpdateQuote/ModalUpdateQuote";
import ModalQuoteDeleted from "../ModalQuoteDeleted/ModalQuoteDeleted";

export default function QuoteCard (props) {
    return (
      <div className="quote">
        <QuoteCardHeader
          date={props.data.dateCreatedAt}
          publisher={props.data.publisher}
          hashtags={props.data.hashtags}
        />
        <QuoteCardBody quote={props.data.quotes} />
        <QuoteCardFooter />
      </div>
    );
}
