import { Divider, List as MuiList } from "@mui/material";
import React from "react";
import { ListItem, ListItemProps } from "./ListItem";

export interface ListProps {
  items: ListItemProps[];
}

export const List = (props: ListProps) => {
  const { items } = props;
  return (
    <MuiList sx={{ width: "100%" }} aria-label="wam-list">
      {items.map((x, index) => (
        <React.Fragment key={index.toString()}>
          <ListItem
            primaryText={x.primaryText}
            secondaryText={x.secondaryText}
            key={index.toString()}
          />
          <Divider />
        </React.Fragment>
      ))}
    </MuiList>
  );
};
