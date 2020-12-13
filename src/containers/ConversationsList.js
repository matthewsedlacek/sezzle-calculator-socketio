import React from "react";
import { API_ROOT } from "../constants";
import MessagesArea from "../components/MessagesArea";

class ConversationsList extends React.Component {
  state = {
    messages: [],
    activeConversation: 1,
    username: "",
    userImage: "",
  };

  componentDidMount = () => {
    this.fetchMessages();
  };

  fetchMessages = () => {
    fetch(`${API_ROOT}/messages`)
      .then((res) => res.json())
      .then((messages) => this.setState({ messages }));
  };

  handleReceivedMessage = (response) => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      (conversation) => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages.slice(0, 9), message];
    this.setState({ conversations });
  };

  render = () => {
    const { messages } = this.state;
    return (
      <React.Fragment>
        {messages.length > 0 ? (
          <MessagesArea
            messages={this.state.messages}
            username={this.props.username}
            userId={this.props.uid}
            userImage={this.state.userImage}
          />
        ) : null}
      </React.Fragment>
    );
  };
}

export default ConversationsList;
