import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
