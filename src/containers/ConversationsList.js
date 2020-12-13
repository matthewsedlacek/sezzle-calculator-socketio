import React from "react";
import { useEffect, useState } from "react";
import MessagesArea from "./MessagesArea";
import socketIOClient from "socket.io-client";

const socketEndpoint = "https://serene-crag-73795.herokuapp.com";
const fetchEndpoint = `${socketEndpoint}/messages`;
const socket = socketIOClient(socketEndpoint);

function ConversationsList(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(fetchEndpoint)
      .then((res) => res.json())
      .then(setMessages)
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("chat message", (msgs) => {
        setMessages(msgs);
      });
    }
  }, []);

  return (
    <React.Fragment>
      {messages.length > 0 ? (
        <MessagesArea
          messages={messages}
          username={props.username}
          userId={props.uid}
        />
      ) : null}
    </React.Fragment>
  );
  // };
}

export default ConversationsList;
