import React from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import APIHandler from "./../../api/handler";
import QuoteCard from "../../Components/QuoteCard/QuoteCard";
import Menu from "./../../Components/Menu/Menu";
import CreateAccount from "./../Auth/Create-Account/CreateAccount";

export default class UserPage extends React.Component {
  state = {
    user: null,
    followBtnState: false,
  };
  async componentDidMount() {
    this.fetchUser();
  }

  // Get the user selected from API
  fetchUser = async () => {
    try {
      const user = await APIHandler.get(
        "/api/users/" + this.props.match.params.pseudo
      );
      this.setState({
        user: user.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  //! NOT WORKING MAN!
  addUserToFollowings = async () => {
    try {
      const foundUser = await APIHandler.get(
        "/api/users/" + this.state.user.user.pseudo
      );

      foundUser.data.user.followers = [
        ...foundUser.data.user.followers,
        "currentUserId",
      ];

      console.log("Found user followers ======>", foundUser);

      const followedUser = await APIHandler.patch(
        "/api/users/" + this.state.user.user.pseudo + "/edit",
        { followers: "foundUser.data.user.followers" }
      );

      console.log(followedUser);
    } catch (e) {
      console.error(e);
    }
  };

  toggleFollow = (e) => {
    this.setState(
      {
        followBtnState: !this.state.followBtnState,
      },
      async () => {
        await this.addUserToFollowings();
      }
    );
  };

  render() {
    if (!this.state.user) {
      return <p className="body">Loading Bro!</p>;
      // Or use the "?" (optional chaining) to check if the condition is null. IE: console.log(this.state.user?.user);
    }
    const { name, pseudo, profilePic, followers, following, likes, favorites } =
      this.state.user.user;

    const btnClass = this.state.followBtnState
      ? "button--primary"
      : "button--secondary";

    return (
      <>
        <Menu />
        {/* //! CHANGE THE CONDITION WHERE this.state.user._id to match currentUser cookie */}
        {/* Here needs to pass the current user cookie */}

        <div className="user_profil" id="user-page">
          {this.state.user.user._id === "617bc435c19b4e77202e3b6f" && (
            <h1 className="title">My account</h1>
          )}
          <div className="user_main_infos">
            <img src={profilePic} alt="User icon" className="user-icon" />
            <span className="body-bold">{name}</span>
            <span className="suggestion-modal">{pseudo}</span>
          </div>

          <div className="user_stats-container">
            <div className="user_stats user_stats--liked">
              <span className="body-bold">{likes.length}</span>
              <span className="suggestion-modal grey">Liked</span>
            </div>
            <div className="user_stats user_stats--saved">
              <span className="body-bold">{favorites.length}</span>
              <span className="suggestion-modal grey">Saved</span>
            </div>
            <div className="user_stats user_stats--followers">
              <span className="body-bold">{followers.length}</span>
              <span className="suggestion-modal grey">Followers</span>
            </div>
            <div className="user_stats user_stats--followers">
              <span className="body-bold">{following.length}</span>
              <span className="suggestion-modal grey">Following</span>
            </div>
          </div>

          {/* //! CHANGE THE CONDITION WHERE this.state.user._id to match currentUser cookie */}
          {/* If it's user's account, edit my account button */}
          {this.state.user.user._id === "617bc435c19b4e77202e3b6f" ? (
            <Link to={pseudo + "/edit"}>
              <span className="published-by-link">Edit my account</span>
            </Link>
          ) : this.state.followBtnState === false ? (
            <div className={btnClass} onClick={this.toggleFollow}>
              Follow
            </div>
          ) : (
            <div className={btnClass} onClick={this.toggleFollow}>
              Unfollow
            </div>
          )}

          <div className="line-separation"></div>

          {/* //! CHANGE THE CONDITION WHERE this.state.user._id to match currentUser cookie */}
          {/* Conditional to check if it's user's account or another user's account */}
          {this.state.user.user._id === "617bc435c19b4e77202e3b6f" ? (
            <h3 className="subtitle">My quotes</h3>
          ) : (
            <h3 className="subtitle">{name}'s quotes</h3>
          )}
        </div>

        {this.state.user.listQuotes.map((quote, i) => {
          return <QuoteCard key={i} data={quote} />;
        })}
      </>
    );
  }
}
