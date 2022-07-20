import { Divider, List as MuiList } from "@mui/material";
import React from "react";
import { ListItem, ListItemProps } from "./ListItem";

export interface ListProps {
  items: ListItemProps[];
}

export const List = (props: ListProps) => {
  const { items } = props;
  return (
    <MuiList sx={{ width: "100%" }}>
      {items.map((x) => (
        <React.Fragment>
          <ListItem
            primaryText={x.primaryText}
            secondaryText={x.secondaryText}
          />
          <Divider />
        </React.Fragment>
      ))}
    </MuiList>
  );
};
