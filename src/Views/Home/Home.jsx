import React from "react";
import APIHandler from "./../../api/handler";
import Menu from "./../../Components/Menu/Menu";
import QuoteCard from "./../../Components/QuoteCard/QuoteCard";

class Home extends React.Component {
  state = {
    quotes: null,
  };
  

  async componentDidMount() {
    try {
      const quotes = await APIHandler.get("/api/home");
      this.setState({ quotes: quotes.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if(!this.state.quotes) {
      return <h1 className="title">Loading</h1>
    }

    return (
      <>
        <Menu />
        <div>
          {this.state.quotes.map((quote, i) => {
            return <QuoteCard key={i} data={quote} />;
          })}
        </div>
      </>
    );
  }
}

export default Home;
