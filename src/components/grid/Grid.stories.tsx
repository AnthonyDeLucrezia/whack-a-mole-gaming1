import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Grid } from "./Grid";
import { MoleProps } from "../mole/Mole";

export default {
  title: "Game/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const generateMolesGrid = (): MoleProps[][] => {
  const arrToReturn: MoleProps[][] = [];
  for (let row = 0; row < 3; row++) {
    const arrRow: MoleProps[] = [];
    for (let item = 0; item < 4; item++) {
      arrRow.push({
        id: `${row}-${item}`,
        isHidden: false,
      });
    }
    arrToReturn.push(arrRow);
  }

  return arrToReturn;
};

export const Primary = Template.bind({});
const grid = generateMolesGrid();
Primary.args = {
  molesArr: grid,
};
