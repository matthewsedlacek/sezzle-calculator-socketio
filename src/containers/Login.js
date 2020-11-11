import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  // listen to the name input
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
    this.setState({ username: username });
  }
  render() {
    return (
      <div className="login-box">
        <h2>Log In</h2>
        <div className="input">
          <input
            type="text"
            placeholder="Please input a nick name"
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
        </div>
        <div className="submit">
          <button type="submit" onClick={this.handleClick.bind(this)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
