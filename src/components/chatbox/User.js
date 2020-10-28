import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const User = (props) => {
  return (
    <List>
      <ListItem button key="userIcon">
        <ListItemIcon>
          <Avatar alt="random user icon" src={props.userImage} />
        </ListItemIcon>
        <ListItemText>{props.username}</ListItemText>
        <ListItemText secondary="online" align="right"></ListItemText>
      </ListItem>
    </List>
  );
};

export default User;
