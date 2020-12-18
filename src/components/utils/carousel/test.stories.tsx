// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Carousel, Props } from ".";
import stories from "./test.stories.css";
import { Data } from "../../../data";

export default {
  title: __dirname,
  component: Carousel,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  const [_, setCount] = useState<number>(0);
  return <Carousel {...args} setCurrentItem={setCount} />;
};
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
    hp: "hogehoge",
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
    hp: "hogehoge",
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
    hp: "hogehoge",
  },
];

export const Component = Template.bind({});
Component.args = {
  data,
};
