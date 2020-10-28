import React from "react";
import { API_ROOT, HEADERS } from "../../constants";

class NewMessageForm extends React.Component {
  state = {
    conversation_id: this.props.conversation_id,
    text: this.props.result,
    username: this.props.username,
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({ conversation_id: nextProps.conversation_id });
    this.setState({ text: nextProps.result });
    this.setState({ username: nextProps.username });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.state),
    });
    this.setState({ text: "" });
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="newMessageForm">Submit Calculation to Chat:</label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;
