import React from "react";
import { API_ROOT } from "../constants";
import MessagesArea from "../components/MessagesArea";
import Cable from "../components/Cable";
import { api } from "../services/api.js";

class ConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: 1,
    username: "",
    userImage: "",
  };

  setUser = (data) => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    api.user.getPet().then((data) => {
      this.setState({
        username:
          data.name + "the" + data.category.toLowerCase() + randomNumber,
        userImage: data.photo.thumb,
      });
    });
  };

  componentDidMount = () => {
    this.setUser();
    this.fetchConversations();
  };

  fetchConversations = () => {
    fetch(`${API_ROOT}/conversations`)
      .then((res) => res.json())
      .then((conversations) => this.setState({ conversations }));
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
    const { conversations, activeConversation } = this.state;
    return (
      <React.Fragment>
        <Cable
          conversations={conversations}
          handleReceivedMessage={this.handleReceivedMessage}
        />
        {conversations.length > 0 ? (
          <MessagesArea
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
            username={this.state.username}
            userImage={this.state.userImage}
          />
        ) : null}
      </React.Fragment>
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
