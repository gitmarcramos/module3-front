import React from "react";
import "./ModalQuoteDeleted.css";

export default function ModalQuoteDeleted() {
  return (
    <>
      <div className="modal-quote-deleted ">
        <span className="body-bold">Are you sure you wanna delete your quote?</span>
        <span className="body-bold danger">Yes, delete my quote!</span>
        <span className="body">Nevermind...</span>
      </div>
    </>
  );
}
