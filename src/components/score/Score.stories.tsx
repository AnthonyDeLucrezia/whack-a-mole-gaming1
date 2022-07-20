import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Score } from "./Score";

export default {
  title: "Game/Score",
  component: Score,
} as ComponentMeta<typeof Score>;

const Template: ComponentStory<typeof Score> = (args) => <Score {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  scorePoints: 37829,
};
