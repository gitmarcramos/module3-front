import React from "react";
import "./../../../styles/form.css";
import MenuSecond from "./../../../Components/MenuSecond/MenuSecond";
import APIHandler from "./../../../api/handler";

export default class createAccount extends React.Component {
  constructor(props) {
    super(props); // MANDATORY !!!!
    this.state = {
      mail: null,
      password: null,
      username: null,
      name: null,
      image: React.createRef(),
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault(); // prevent the form to reload
    // destructuring the state
    const { mail, password, username, name, image } = this.state;

    // accessing the image out of the ref
    const file = this.state.image.current.files[0]; // target the image file associated to the input[type=file]

    const uploadData = new FormData(); // create a form data => an object to send as post body

    // appending the keys / values pairs to the FormData
    uploadData.append("email", mail); // create a key [name] on the formDate
    uploadData.append("password", password);
    uploadData.append("username", username);
    uploadData.append("name", name);
    uploadData.append("image", file);

    //! to change
    try {
      await APIHandler.post("/api/cats", uploadData); // sending the formData
      this.props.handler(); // passing the ball to the parent's callback
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <MenuSecond />
        <h1 className="title">Create an account</h1>
        <form className="form">
          <div className="user-pic">
            <input
              ref={this.state.image}
              className="pic-input"
              id="image"
              name="image"
              type="file"
            />
            <img
              src="./../../../../public/Images/icons/menu-account-icon.svg"
              alt=""
            />
          </div>

          <div className="input-container">
            <label className="body-bold" htmlFor="email">
              Email*
            </label>
            <span className="error-message">Error message if needed</span>
            <input
              className="input"
              id="email"
              name="name"
              type="email"
              placeholder="Your email"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-container">
            <label className="body-bold" htmlFor="email">
              Password*
            </label>
            <span className="error-message">Error message if needed</span>
            <input
              className="input"
              name="password"
              id="password"
              type="password"
              placeholder="Choose a password"
            ></input>
          </div>

          <div className="input-container">
            <label className="body-bold" htmlFor="username">
              Your username*
            </label>
            <span className="error-message">Error message if needed</span>
            <input
              className="input"
              name="username"
              id="username"
              type="text"
              placeholder="Enter your username"
            ></input>
          </div>

          <div className="input-container">
            <label className="body-bold" htmlFor="username">
              Your name
            </label>
            <span className="error-message">Error message if needed</span>
            <input
              className="input"
              name="name"
              id="name"
              type="text"
              placeholder="What is your name?"
            ></input>
          </div>
          <button className="button--primary" onClick={this.handleSubmit}>
            Create my account
          </button>
        </form>
      </>
    );
  }
}
