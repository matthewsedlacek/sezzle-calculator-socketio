import React, { Component } from "react";
import CalculatorDisplay from "../components/calculator/CalculatorDisplay";
import Keypad from "../components/calculator/Keypad";
import SezzleLogo from "../components/calculator/SezzleLogo";
import Card from "react-bootstrap/Card";
import socketIOClient from "socket.io-client";

const socketEndpoint = "http://localhost:8000";
const socket = socketIOClient(socketEndpoint);

class Calculator extends Component {
  state = {
    result: "",
    errorMessage: 0,
    resultPost: "",
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "←") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    try {
      this.handleSubmit();
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  handleSubmit = (e) => {
    socket.emit(
      "chat message",
      JSON.stringify({
        // eslint-disable-next-line
        text: this.state.result + " = " + (eval(this.state.result) || 0) + "",
        username: this.props.username,
      })
    );

    this.setState({ result: "" });
  };

  reset = () => {
    this.setState({
      result: "",
      resultPost: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return ["Primary"].map((variant, idx) => (
      <Card className="calculatorContainer" bg={variant.toLowerCase()}>
        <Card.Body>
          <Card.Text>
            <SezzleLogo />
          </Card.Text>
          <Card.Text>
            <CalculatorDisplay result={this.state.result} />
          </Card.Text>
          <Card.Text>
            <Keypad
              onClick={this.onClick}
              resultPost={this.state.resultPost}
              conversation_id={this.props.conversation_id}
              username={this.props.username}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }
}

export default Calculator;
