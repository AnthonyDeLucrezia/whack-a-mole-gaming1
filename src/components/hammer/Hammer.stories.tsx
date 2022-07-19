import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Hammer } from "./Hammer";

export default {
  title: "Game/Hammer",
  component: Hammer,
} as ComponentMeta<typeof Hammer>;

const Template: ComponentStory<typeof Hammer> = (args) => (
  <Hammer posX={100} posY={100} />
);

export const Primary = Template.bind({});
