import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Game/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const onClick = () => {
  console.log("cliked !");
};

const Template: ComponentStory<typeof Button> = (args) => (
  <Button label="Click me" key={"btn-key"} onClick={onClick} />
);

export const Primary = Template.bind({});
