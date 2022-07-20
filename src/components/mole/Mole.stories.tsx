import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Mole } from "./Mole";

export default {
  title: "Game/Mole",
  component: Mole,
} as ComponentMeta<typeof Mole>;

const Template: ComponentStory<typeof Mole> = (args) => <Mole {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isHidden: false,
  id: "5-10",
};
