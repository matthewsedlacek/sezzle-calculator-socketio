import React from "react";
import { ActionCable } from "react-actioncable-provider";
import { API_ROOT } from "../constants";
import MessagesArea from "../components/MessagesArea";
import Cable from "../components/Cable";
import { api } from "../services/api.js";
import Typography from "@material-ui/core/Typography";
import Card from "react-bootstrap/Card";

class ConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: null,
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

  componentDidMount = () => {
    this.setUser();
    fetch(`${API_ROOT}/conversations`)
      .then((res) => res.json())
      .then((conversations) => this.setState({ conversations }));
  };

  handleClick = (id) => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = (response) => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation],
    });
  };

  handleReceivedMessage = (response) => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      (conversation) => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversations });
  };

  render = () => {
    const { conversations, activeConversation } = this.state;
    return (
      <div>
        <ActionCable
          channel={{ channel: "ConversationsChannel" }}
          onReceived={this.handleReceivedConversation}
        />
        {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <Card className="calculatorContainer">
          <Typography variant="h2">Conversations</Typography>
          <br></br>
          <Typography variant="h6">Click To Join</Typography>
          <ul>{mapConversations(conversations, this.handleClick)}</ul>
        </Card>
        {activeConversation ? (
          <MessagesArea
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
            username={this.state.username}
            userImage={this.state.userImage}
          />
        ) : null}
      </div>
    );
  };
}

export default ConversationsList;

// helpers

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    (conversation) => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map((conversation) => {
    return (
      <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </li>
    );
  });
};
