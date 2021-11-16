import React from "react";
import "./QuoteCardBody.css"

export default function QuoteCardBody(props){

    return(
        <>
            <div className="quote-body">
            {/* loop */}
            <div className="quote_atom">               
                <h2 className="title">USER NAME</h2>
                <p className="body">User quote</p>
            </div>
            {/* loop */}
            <div className="quote_atom">               
                <h2 className="title">USER NAME</h2>
                <p className="body">User quote</p>
            </div>
            <div className="quote_atom">               
                <h2 className="title">USER NAME</h2>
                <p className="body">User quote</p>
            </div>
        </div>
        </>
    )
}