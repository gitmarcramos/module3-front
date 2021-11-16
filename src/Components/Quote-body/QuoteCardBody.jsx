import React from "react";
import "./QuoteCardBody.css";

export default function QuoteCardBody(props) {
  return (
    <>
      <div className="quote-body">
        {props.quote.map((quote, i) => {
          return (
            <div className="quote_atom" key={i}>
              <h2 className="title">{quote.user}</h2>
              <p className="body">{quote.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
