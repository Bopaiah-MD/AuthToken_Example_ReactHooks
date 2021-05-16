import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Logout from "./Components/Logout";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/logout"><Logout /></Route>
        </Switch>
      </div>
    </Router>
  );
}

