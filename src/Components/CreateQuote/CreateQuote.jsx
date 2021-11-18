import React, { Component } from "react";
import "./CreateQuote.css";
import Menu from "./../Menu/Menu";
import CreateQuoteBody from "./../CreateQuote-Body/CreateQuote-Body";
import APIHandler from "./../../api/handler";

export default class CreateQuote extends Component {
  state = {
    publisher: "currentUser",
    user: [],
    text: [],
    hashtags: [],
    counter: 0,
  };

  addPerson = (e) => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleChange = (e, i) => {
    const copy = [...this.state[e.target.name]];
    copy[i] = e.target.value;

    this.setState({
      copy
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newQuote = await APIHandler.post("/api/create-quote", this.state);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    let repeat = Array(this.state.counter).fill(0);
    console.log(this.state.text);

    return (
      <>
        <Menu />
        <div id="quote-create">
          <p className="instructions grey">How to create an Awesome Quote?</p>

          <form className="form">
            <div className="ajax_form form">
              <div className="ajax_form_message_container">
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
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                {/* Here add persons */}
                {repeat.map((quote, i) => {
                  return (
                    <CreateQuoteBody handleChange={this.handleChange} key={i} i={i}/>
                  );
                })}
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
