import React, { Component } from "react";
import "./App.css";
import ConversationsList from "./containers/ConversationsList";
import Calculator from "./containers/Calculator";
import MessageArea from "./components/MessagesArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ConversationsList /> */}

        <Calculator />
      </div>
    );
  }
}

export default App;
