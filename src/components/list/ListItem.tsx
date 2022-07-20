import {
  Avatar,
  ListItem as Item,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export interface ListItemProps {
  primaryText: string;
  secondaryText: string;
}

export const ListItem = (props: ListItemProps) => {
  const { primaryText, secondaryText } = props;
  return (
    <Item>
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} />
      <ListItemText primary={secondaryText} sx={{ textAlign: "right" }} />
    </Item>
  );
};
