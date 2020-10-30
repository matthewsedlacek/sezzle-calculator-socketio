import React, { Component } from "react";
import "./App.css";
import ConversationsList from "./containers/ConversationsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConversationsList />
      </div>
    );
  }
}

export default App;
