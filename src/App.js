import React, { Component } from "react";
import "./App.css";
import ConversationsList from "./containers/ConversationsList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  generateUid() {
    return new Date().getTime() + "" + Math.floor(Math.random() * 7 + 4);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.handleLogin();
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleLogin();
    }
    return false;
  }

  handleLogin() {
    let username = this.state.username;
    const uid = this.generateUid();
    if (!username) {
      username = "Guest";
    }
    this.setState({ uid: uid, username: `${username} ID:${uid}` });
  }
  render() {
    let renderDOM;
    if (this.state.uid) {
      renderDOM = (
        <ConversationsList
          username={this.state.username}
          uid={this.state.uid}
        />
      );
    } else {
      renderDOM = (
        <Container component="main" maxWidth="xs">
          <div className="loginForm">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="text"
              autoFocus
              placeholder="Please input a screen name to continue"
              onChange={this.handleChange.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
            />
            <div className="submit">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleClick.bind(this)}
              >
                Submit
              </Button>
            </div>
          </div>
        </Container>
      );
    }
    return <div>{renderDOM}</div>;
  }
}
