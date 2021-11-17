import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import "./styles/mainStyle.css";
import Loader from "./Components/Loader/Loader";
import CreateAccount from "./Views/Auth/Create-Account/CreateAccount";
import ChooseAccountCreation from "./Views/Auth/ChooseAccountCreation/ChooseAccountCreation"
import Login from "./Views/Auth/Login/Login"
import UserPage from "./Views/Users/UserPage"

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
          <Route path="/auth/create-account" component={CreateAccount} />
          <Route path="/auth/account-creation" component={ChooseAccountCreation} />
          <Route path="/auth/login" component={Login}/>

          <Route path="/users/:pseudo" component={UserPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
