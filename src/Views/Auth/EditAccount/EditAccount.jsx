import React, { Component } from "react";
import "./EditAccount.css";
import Menu from "../../../Components/Menu/Menu";
import APIHandler from "../../../api/handler";

export default class EditAccount extends Component {
  //decomposer le state avec les values dont on a besoin :)
  state = {
    mail: null,
    name: null,
    pseudo: null,
    profilePic: null,
  };

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate() {
    if (this.props.match.params.pseudo !== this.state.pseudo)
      this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const dbPseudo = this.props.match.params.pseudo;
      const { data } = await APIHandler.get("/api/users/" + dbPseudo);

      const { mail, name, pseudo, profilePic } = data.user;
      this.setState({ mail, name, pseudo, profilePic });

    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value, e.target.name);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateUser = await APIHandler.patch(
        "/api/users/" + this.state.pseudo,
        this.state
      );
      this.setState(...updateUser);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    if (!this.state) {
      return <h1 className="title">Getting infos in database</h1>;
    }

    return (
      <>
        <Menu />
        <div id="update_account-page">
          <h1 className="title">Update my account</h1>

          <form className="form">
            <a href="" id="imagePicker">
              <img src={this.state.profilePic} alt="user-icon"></img>
            </a>
            <label htmlFor="textImage"></label>
            <input
              className="input"
              type="file"
              id="textImage"
              name="profilePic"
              onChange={this.handleChange}
            />

            <div className="input-container">
              <label className="body-bold" htmlFor="mail">
                Email*
              </label>
              <input
                className="input"
                type="email"
                id="mail"
                name="mail"
                placeholder="Update your email *"
                required
                value={this.state.mail}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-container">
              <label className="body-bold" htmlFor="password">
                New Password
              </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="New password"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-container">
              <label className="body-bold" htmlFor="password-confirm">
                Confirm password
              </label>
              <input
                className="input"
                type="password"
                id="password-confirm"
                name="password-confirm"
                placeholder="Confirm new password"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-container">
              <label className="body-bold" htmlFor="name">
                Name
              </label>
              <input
                placeholder="Name"
                className="input"
                name="name"
                type="text"
                onChange={this.handleChange}
                // value={this.state.user.name}
              />
            </div>

            <span className="span-edit grey">* mandatory fields</span>

            <button className="button--primary" onSubmit={this.handleSubmit}>
              Update my account
            </button>
          </form>
        </div>
      </>
    );
  }
}
