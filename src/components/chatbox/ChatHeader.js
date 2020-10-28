import React from "react";
import Typography from "@material-ui/core/Typography";

const ChatHeader = (props) => {
  return <Typography variant="h5">{props.title}</Typography>;
};

export default ChatHeader;
