import React from "react";
import { useEffect, useState } from "react";
// import { API_ROOT } from "../constants";
import MessagesArea from "../components/MessagesArea";
import socketIOClient from "socket.io-client";

const socketEndpoint = "http://localhost:8000";
const fetchEndpoint = "http://localhost:3000/messages";
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
          // userImage={this.state.userImage}
        />
      ) : null}
    </React.Fragment>
  );
  // };
}

export default ConversationsList;
