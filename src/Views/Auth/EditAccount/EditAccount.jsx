import React, { Component } from "react";
import "./EditAccount.css";
import Menu from "../../../Components/Menu/Menu";
import APIHandler from "../../../api/handler";

export default class EditAccount extends Component {
  state = {
    user: [],
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      //! here needs to replace "flo" by ":pseudo" and get the pseudo value from the front
      const getUser = await APIHandler.get("/api/users/flo");
      this.setState({ user: getUser.data.user });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.state === []) {
      return <p className="body">Getting infos in database</p>;
      // Or use the "?" (optional chaining) to check if the condition is null. IE: console.log(this.state.user?.user);
    }


    return (
      <>
        <Menu />
        <div id="update_account-page">
          <h1 className="title">Update my account</h1>

          <form className="form">
            <a href="" id="imagePicker">
              <img src="/images/icons/user-icon.png" alt="user-icon"></img>
            </a>
            <label htmlFor="textImage"></label>
            <input
              className="input"
              type="file"
              id="textImage"
              name="profilePic"
              onChange={this.handleChange}
            />

            <input
              className="input"
              type="email"
              id="mail"
              name="mail"
              placeholder="Update your email *"
              required
              value={this.state.user.mail}
              onChange={this.handleChange}
            />

            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="New password *"
              required
              onChange={this.handleChange}
            />

            <input
              className="input"
              type="password"
              id="password-confirm"
              name="password-confirm"
              placeholder="Confirm new password *"
              required
              onChange={this.handleChange}
            />

            <input
              placeholder="Name"
              className="input"
              name="name"
              type="text"
              value={this.state.user.name}
              onChange={this.handleChange}
            />

            <span className="span-edit grey">* mandatory fields</span>

            <button className="button--primary">Update my account</button>
          </form>
        </div>
      </>
    );
  }
}
