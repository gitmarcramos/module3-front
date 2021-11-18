import React from "react";
import "./ModalUpdateQuote.css";

export default function ModalUpdateQuote() {
  return (
    <>
      <div className="modal-update-quote ">
        <div className="modal-update-close">
          <img className="modal-close" src="./../../../Images/icons/close.svg" alt="Close icon" />
        </div>

        <span className="button--primary">Edit my quote</span>
        <span className="button--primary delete">Delete my quote</span>
      </div>
    </>
  );
}
