import React from "react";
import MessageCard from "./MessageCard";

import List from "@material-ui/core/List";

const MessageList = (props) => {
  const renderMessages = () => {
    return props.messages.map((soloMessage) => {
      return (
        <MessageCard
          key={soloMessage.id}
          id={soloMessage.id}
          messageText={soloMessage.text}
          username={soloMessage.username}
          timestamp={soloMessage.created_at}
          currentUser={props.currentUser}
        />
      );
    });
  };

  return <List className="chatboxMessagesContainer">{renderMessages()}</List>;
};

export default MessageList;
