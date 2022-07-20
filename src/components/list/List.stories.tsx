import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "./List";
import { ListItemProps } from "./ListItem";

export default {
  title: "Game/List",
  component: List,
} as ComponentMeta<typeof List>;

const items: ListItemProps[] = [];

for (let cpt = 0; cpt < 10; cpt++) {
  items.push({
    primaryText: `player-${1}`,
    secondaryText: `${cpt * 15}`,
  });
}

const Template: ComponentStory<typeof List> = () => <List items={items} />;

export const Primary = Template.bind({});
