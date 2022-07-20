import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Grid } from "./Grid";
import { generateMoles } from "../../utils/utils";

export default {
  title: "Game/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
const grid = generateMoles(3, 4);
Primary.args = {
  gridData: grid,
};
