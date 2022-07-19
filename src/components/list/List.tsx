import { List as MuiList } from "@mui/material";
import React from "react";
import { ListItem, ListItemProps } from "./ListItem";

export interface ListProps {
  items: ListItemProps[];
}

export const List = (props: ListProps) => {
  const { items } = props;
  return (
    <MuiList>
      {items.map((x) => (
        <ListItem primaryText={x.primaryText} secondaryText={x.secondaryText} />
      ))}
    </MuiList>
  );
};
