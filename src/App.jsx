import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import "./styles/mainStyle.css";
import Loader from "./Components/Loader/Loader";
import CreateAccount from "./Views/Auth/Create-Account/CreateAccount";
import EditAccount from "./Views/Auth/EditAccount/EditAccount"
import ChooseAccountCreation from "./Views/Auth/ChooseAccountCreation/ChooseAccountCreation";
import Login from "./Views/Auth/Login/Login";
import UserPage from "./Views/Users/UserPage";
import CreateQuote from "./Components/CreateQuote/CreateQuote";

//authentication
import { UserContextProvider } from "./Components/Auth/UserContext";
import { ProtectedRoute } from "./Components/Auth/ProtectedRoute";

class App extends Component {
  state = {
    quotes: [],
  };

  render() {
    return (
      <UserContextProvider>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Loader} />
            <Route path="/home" component={Home} />

            <Route path="/auth/create-account" component={CreateAccount} />
            <Route
              path="/auth/account-creation"
              component={ChooseAccountCreation}
            />
            <Route path="/auth/login" component={Login} />

            <Route exact path="/users/:pseudo/edit" component={EditAccount} />
            <Route path="/users/:pseudo" component={UserPage} />

            {/* <ProtectedRoute
              path="/quotes/create-quote"
              component={CreateQuote}
            /> */}
            <Route path="/quotes/create-quote" component={CreateQuote} />
          </Switch>
        </div>
      </UserContextProvider>
    );
  }
}

export default App;
