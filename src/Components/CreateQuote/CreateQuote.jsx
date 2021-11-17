import React, { Component } from "react";
import "./CreateQuote.css";
import Menu from "./../Menu/Menu";
import CreateQuoteBody from "./../CreateQuote-Body/CreateQuote-Body";
import APIHandler from "./../../api/handler";

export default class CreateQuote extends Component {
  state = {
    publisher: null,
    user: null,
    text: null,
    hashtags: [],
  };

  addPerson = (e) => {
    <CreateQuoteBody/>
    console.log(this.state)
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.hashtags)
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newQuote = await APIHandler.post("/api/create-quote", this.state);
      console.log(newQuote);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <>
        <Menu />
        <div id="quote-create">
          <p className="instructions grey">How to create an Awesome Quote?</p>

          <form className="form">
            <div className="ajax_form form">
              <div className="ajax_form_message_container">
                <CreateQuoteBody />
              </div>
            </div>

            <div className="ajax_input" id="ajax-input-hashtag-container">
              <label className="hashtags" htmlFor="ajax-input-hashtag">
                Hashtags:
              </label>

              <input
                id="ajax-input-hashtag input"
                type="text"
                name="hashtags"
                placeholder="#"
                onChange={this.handleChange}
              ></input>
            </div>

            <div className="button-container">
              <div className="button--add_person" onClick={this.addPerson}>
                + Add a person to the conversation
              </div>
              <button className="button--primary" onClick={this.handleSubmit}>
                Publish
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
