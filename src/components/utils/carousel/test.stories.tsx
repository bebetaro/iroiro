// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Carousel, Props } from ".";
import stories from "./test.stories.css";

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
const data = ["km9Il_-FHjw", "NW5vDKhwgm8", "zaDbG9Ik-ZA"];

export const Component = Template.bind({});
Component.args = {
  data,
};
