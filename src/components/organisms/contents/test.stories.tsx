// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Contents, Props } from ".";
import { Data } from "../../../data";

export default {
  title: __dirname,
  component: Contents,
  decorators: [
    (storyFn) => (
      <>
        <div>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Contents {...args} />;
const data: Array<Data> = [
  {
    videoId: "km9Il_-FHjw",
    title: "Something Great1",
    description: `
  ## This is great Content

  ### Why?

  ### Because it's great
  `,
    year: "90",
    category: "Action",
  },
  {
    videoId: "NW5vDKhwgm8",
    title: "Something Great2",
    description: `
  ## This is great Content

  ### Why?

  ### Because it's great
  `,
    year: "90",
    category: "Action",
  },
  {
    videoId: "zaDbG9Ik-ZA",
    title: "Something Great3",
    description: `
  ## This is great Content

  ### Why?

  ### Because it's great
  `,
    year: "90",
    category: "Action",
  },
];
export const Component = Template.bind({});
Component.args = {
  data,
};
