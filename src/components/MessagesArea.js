import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import User from "../components/chatbox/User";
import MessageList from "../components/chatbox/MessageList";
import Calculator from "../containers/Calculator";

const MessagesArea = (props) => {
  const { username, userImage, userId, messages } = props;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid className="appMargin">
          <Calculator username={username} uid={userId} />
        </Grid>
        <Grid style={{ padding: 20 }} item xs={7}>
          <Grid component={Paper}>
            <Grid item xs={12}>
              <User username={username} userImage={userImage} userId={userId} />
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
