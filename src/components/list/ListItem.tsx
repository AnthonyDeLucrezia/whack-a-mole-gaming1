import { ListItem as Item, ListItemText } from "@mui/material";
import React from "react";

export interface ListItemProps {
  primaryText: string;
  secondaryText: string;
}

export const ListItem = (props: ListItemProps) => {
  const { primaryText, secondaryText } = props;
  return (
    <Item>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </Item>
  );
};
