import React from "react";
import NewMessageForm from "./chatbox/NewMessageForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChatHeader from "../components/chatbox/ChatHeader";
import User from "../components/chatbox/User";
import MessageList from "../components/chatbox/MessageList";
import Calculator from "../containers/Calculator";

const MessagesArea = (props) => {
  const {
    conversation: { id, title, messages },
  } = props;

  const { username, userImage } = props;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid className="appMargin">
          <Calculator conversation_id={id} username={username} />
        </Grid>
        <Grid style={{ padding: 20 }} item xs={7}>
          <Grid component={Paper}>
            <Grid item xs={12}>
              <ChatHeader title={title} />
              <User username={username} userImage={userImage} />
              <MessageList messages={messages} currentUser={username} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      ;
    </div>
  );
};

export default MessagesArea;
