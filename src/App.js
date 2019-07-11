import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Add from "./pages/add";
import List from "./pages/list";
import Edit from "./pages/edit";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Switch>
          <NavBar /> 
          <Route exact path="/" Component={Home} />
          <Route path="/manage/add" Component={Add} />
          <Route path="/manage/edit:designId" Component={Edit} />
          <Route path="/manage/list" Component={List} />
        </Switch>
    );
  }
}
export default App;
