import React, { Fragment } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

const actioncable = require("actioncable");
const ac = actioncable.createConsumer(
  "wss://gentle-castle-53687.herokuapp.com/cable"
);

const Cable = ({ conversations, handleReceivedMessage }) => {
  return (
    <Fragment>
      {conversations.map((conversation) => {
        ac.subscriptions.create();
        return (
          <ActionCableConsumer
            key={conversation.id}
            channel={{
              channel: "MessagesChannel",
              conversation: conversation.id,
            }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;
