import React from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import APIHandler from "./../../api/handler";
import QuoteCard from "../../Components/QuoteCard/QuoteCard";

export default class UserPage extends React.Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    this.fetchUser();
  }

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

  render() {
    if (!this.state.user) {
      return <p>Loading Bro!</p>;
      // Or use the "?" (optional chaining) to check if the condition is null. IE: console.log(this.state.user?.user);
    }
    const { name, pseudo, profilePic, followers, following, likes, favorites } =
      this.state.user.user;

    console.log(this.state.user.listQuotes[0])

    return (
      <>
        {/* Here needs to pass the current user cookie */}
        {this.state.user.user._id === "currentUser" && (
          <h1 className="title">My account</h1>
        )}

        <div className="user_profil" id="user-page">
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

          <div className="line-separation"></div>
        </div>

        {/* <QuoteCard publisher="Hello" date="boo" hashtags='boo' data="hello"/> */}
        {this.state.user.listQuotes.map((quote, i)=>{
            return(
                <QuoteCard key={i} data={quote}/>
            )
        })}
      </>
    );
  }
}
