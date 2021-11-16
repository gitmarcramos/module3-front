import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import "./styles/mainStyle.css";
import Loader from "./Components/Loader/Loader";
import CreateAccount from "./Views/Auth/Create-Account/CreateAccount";
import ChooseAccountCreation from "./Views/Auth/ChooseAccountCreation/ChooseAccountCreation"
import Login from "./Views/Auth/Login/Login"

class App extends React.Component {
  state = {
    quotes: [],
  };

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Loader}/>
          <Route path="/home" component={Home} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/account-creation" component={ChooseAccountCreation} />
          <Route path="/auth/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
