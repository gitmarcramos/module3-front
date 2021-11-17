import React from "react";
import "./CreateQuote-Body.css";

export default function CreateQuoteBody(props) {
  return (
    <>
      <div className="ajax-form-by-person">
        <div className="ajax_input">
          <label className="body-bold" htmlFor="ajax-input-name">
            Name
          </label>

          <input
            id="ajax-input-name"
            type="text"
            name="user"
            placeholder="Enter the name of the person"
            required
          ></input>
        </div>

        <div className="ajax_input">
          <label className="body-bold" htmlFor="ajax-input-message">
            Message
          </label>

          <textarea
            name="text"
            id="ajax-input-message"
            cols="30"
            rows="5"
            placeholder="Enter here your message"
            required
          ></textarea>
        </div>
      </div>
    </>
  );
}
