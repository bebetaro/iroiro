// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Toast, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Toast,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story<Props & { children: React.ReactNode }> = (args) => (
  <Toast {...args} />
);

export const Component = Template.bind({});
Component.args = {
  isOpen: true,
  children: `このボタンから
  フィルタリングできます`,
  position: {
    top: 0,
    left: "50%",
    right: undefined,
    bottom: undefined,
  },
};
