import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const moment = require("moment");

const MessageCard = (props) => {
  // let dateString = props.timestamp;
  // let dateObj = new Date(dateString);
  // let momentObj = moment(dateObj);
  // let momentString = momentObj.format("MMMM Do YYYY, h:mm:ss a");
  return (
    <ListItem>
      <Grid item xs={12}>
        {props.currentUser === props.username ? (
          <>
            <ListItemText
              align="left"
              primary={props.messageText}
            ></ListItemText>
            <ListItemText
              align="left"
              // secondary={momentString}
            ></ListItemText>
            <ListItemText
              align="left"
              secondary={props.username}
            ></ListItemText>
            <Divider />
          </>
        ) : (
          <>
            <ListItemText
              align="right"
              primary={props.messageText}
            ></ListItemText>
            <ListItemText
              align="right"
              // secondary={momentString}
            ></ListItemText>
            <ListItemText
              align="right"
              secondary={props.username}
            ></ListItemText>
            <Divider />
          </>
        )}
      </Grid>
    </ListItem>
  );
};

export default MessageCard;
