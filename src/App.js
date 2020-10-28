import React, { Component } from "react";
import "./App.css";
import ConversationsList from "./containers/ConversationsList";
import { api } from "./services/api.js";

class App extends Component {
  state = {
    username: "",
    userImage: "",
  };

  componentDidMount() {
    this.setUser();
  }

  setUser = (data) => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    api.user.getPet().then((data) => {
      this.setState({
        username:
          data.name +
          " the " +
          data.category.toLowerCase() +
          " " +
          randomNumber,
        userImage: data.photo.thumb,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <ConversationsList
          username={this.state.username}
          userImage={this.state.userImage}
        />
      </div>
    );
  }
}

export default App;
