import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "./InputText";

export default {
  title: "Game/InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
  const [value, setValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <InputText
      label="Enter somthing"
      id="input-id"
      onChange={onInputChange}
      key="btn-key"
      value={value}
    />
  );
};

export const Primary = Template.bind({});
